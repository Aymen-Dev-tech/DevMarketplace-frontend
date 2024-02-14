import Box from "@mui/material/Box";
import ProductsTable from "../components/Dashboard/ProductsTable";
import StatCard from "../components/Dashboard/StatCard";
import { useEffect, useState } from "react";
import {
  dashboardStat,
  productsList,
  productsResponse,
} from "../api/fetching.apis";
import { AxiosError } from "axios";
import { updateProductState } from "../api/post.apis";
import { deleteProject } from "../api/delete.apis";

export default function DashboardMain() {
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [soldProducts, setSoldProducts] = useState<number>(0);
  const [stockProducts, setStockProducts] = useState<number>(0);
  const [products, setProducts] = useState<Partial<productsResponse>[]>([]);

  useEffect(() => {
    const fetchStat = async () => {
      try {
        const data = await dashboardStat();
        const productList = await productsList();
        if (!ignore) {
          setTotalSales(data.totalSales);
          setTotalProducts(data.totalProducts);
          setSoldProducts(data.soldProducts);
          setStockProducts(data.stockProducts);
          setProducts(productList);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log(err);
        } else {
          console.log("unknown err: ", err);
        }
      }
    };
    let ignore = false;
    fetchStat();
    return () => {
      ignore = true;
    };
  }, []);
  const handleCheckChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    position: number,
    projectId: number
  ) => {
    const newProducts = products.map((product, index) => {
      if (index === position)
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          isSold: event.target.checked,
        };
      return product;
    });
    setProducts(newProducts);
    try {
      console.log(
        await updateProductState(
          projectId,
          newProducts.find((product) => product.id === projectId)
        )
      );
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("AXIOS ERROR: ", err);
      } else {
        console.log("unkown error: ", err);
      }
    }
  };
  const handleProjectDeletion = async (index: number) => {
    try {
      console.log(await deleteProject(products[index].id));
      const newProjects = products.toSpliced(index, 1);
      setProducts(newProjects);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log("Axios Error: ", err);
      } else {
        console.log("unkown Error: ", err);
      }
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <StatCard
          title="Total Sales"
          total={`${totalSales.toString()} DZD`}
          icon={<img alt="icon" src="/icons/totalSales.png" />}
          color="success"
        />
        <StatCard
          title="Total Projects"
          total={totalProducts.toString()}
          icon={<img alt="icon" src="/icons/monitor.png" />}
          color="success"
        />
        <StatCard
          title="Sold Projects"
          total={soldProducts.toString()}
          icon={<img alt="icon" src="/icons/sold-projects.png" />}
          color="success"
        />
        <StatCard
          title="Stock Projects"
          total={stockProducts.toString()}
          icon={<img alt="icon" src="/icons/stock-projects.png" />}
          color="success"
        />
      </Box>
      <ProductsTable
        products={products}
        onChange={handleCheckChange}
        onClick={handleProjectDeletion}
      />
    </Box>
  );
}

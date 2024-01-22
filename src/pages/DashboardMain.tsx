import Box from "@mui/material/Box";
import ProductsTable from "../components/ProductsTable";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import {
  dashboardStat,
  productsList,
  productsResponse,
} from "../api/fetching.apis";
import { AxiosError } from "axios";

export default function DashboardMain() {
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [soldProducts, setSoldProducts] = useState<number>(0);
  const [stockProducts, setStockProducts] = useState<number>(0);
  const [products, setProducts] = useState<productsResponse[]>([]);

  useEffect(() => {
    console.log("calling effect");

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
          total={totalSales}
          icon={<img alt="icon" src="/icons/review.png" />}
          color="success"
        />
        <StatCard
          title="Total Products"
          total={totalProducts}
          icon={<img alt="icon" src="/icons/review.png" />}
          color="success"
        />
        <StatCard
          title="Sold Products"
          total={soldProducts}
          icon={<img alt="icon" src="/icons/review.png" />}
          color="success"
        />
        <StatCard
          title="Stock Products"
          total={stockProducts}
          icon={<img alt="icon" src="/icons/review.png" />}
          color="success"
        />
      </Box>
      <ProductsTable products={products} />
    </Box>
  );
}

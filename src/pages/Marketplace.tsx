import { useEffect, useState } from "react";
import SearchBox from "../components/Markteplace/SearchBox";
import {
  productsResponse,
  Suggestions,
  productsList,
  fetchingSuggestionsRes,
  fetchingImageAsStream,
} from "../api/fetching.apis";
import { AxiosError } from "axios";
import { Buffer } from "buffer";
import ProductList from "../components/Markteplace/ProductList";
import Box from "@mui/material/Box";
import { LandingNavbar } from "../components/Landing/LandingNavbar";
import { Typography } from "@mui/material";

export type urlsType = {
  url: string;
  id?: number;
};
export default function Marketplace() {
  const [products, setProducts] = useState<productsResponse[]>([]);
  const [options, setOptions] = useState<Suggestions[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [images, setImages] = useState<urlsType[]>([]);
  useEffect(() => {
    const fetchingSuggestions = async () => {
      try {
        const productsRes = await productsList();
        const urls: urlsType[] = [];
        productsRes.forEach((product) => {
          urls.push({ url: product.ProductPicture[0].url, id: product.id });
        });

        const promises: Promise<any>[] = urls.map((item) =>
          fetchingImageAsStream(item.url)
        );

        const resolvePromises: string[] = await Promise.all(
          promises.map(async (promise) => {
            const data = await promise;
            const base64ImageString = Buffer.from(data, "binary").toString(
              "base64"
            );
            return "data:image/png;base64," + base64ImageString;
          })
        );

        const urlImgs: urlsType[] = [];
        for (let i = 0; i < resolvePromises.length; i++) {
          urlImgs.push({ id: productsRes[i].id, url: resolvePromises[i] });
        }

        let data: Suggestions[] = [];
        if (inputValue.length > 2)
          data = await fetchingSuggestionsRes(inputValue.toLowerCase());
        if (!ignore) {
          setOptions(data);
          setProducts(productsRes);
          setImages(urlImgs);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("axois err: ", err);
        } else {
          console.log("unkown err: ", err);
        }
      }
    };
    let ignore = false;
    fetchingSuggestions();

    return () => {
      ignore = true;
    };
  }, [inputValue]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Box sx={{ width: "1255px", height: "96px", marginTop: "10rem" }}>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "48px",
            textAlign: "center",
          }}
        >
          Elevate your online presence with our top-notch digital products:
          websites, platforms, scripts, and apps
        </Typography>
      </Box>

      <LandingNavbar />

      <SearchBox
        options={options}
        inputValue={inputValue}
        onSelect={(event) => {
          setValue(event.target.value);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        getOptionLabel={(option) => (option.name ? option.name : "")}
      />
      <ProductList products={products} images={images} searchValue={value} />
    </Box>
  );
}

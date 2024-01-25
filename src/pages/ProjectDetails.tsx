import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { productsResponse, productDetails } from "../api/fetching.apis";
import { AxiosError } from "axios";

export default function ProjectDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<productsResponse>();
  const [image, setImage] = useState<string>('');
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await productDetails(id);
        const urlImage = localStorage.getItem('image');
        if (!ignore) {
          setImage(urlImage);
          setProduct(data);
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("axios error", err);
        } else {
          console.log("unkown error", err);
        }
      }
    };
    let ignore = false;
    fetchProductDetails();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <Box
      sx={{
        width: "60%",
        height: "60%",
        position: "absolute",
        // bgcolor: "blue",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginBottom: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          alt={product?.Seller.user.name}
          src={product?.Seller.user.profilePicture}
          sx={{ width: 56, height: 56 }}
        />
        <p
          style={{
            textAlign: "center",
            marginRight: "auto",
            marginLeft: "1rem",
          }}
        >
          {product?.Seller.user.name}
        </p>

        <Button variant="contained"> Get in touch </Button>
      </Box>
      <Stack direction="row" spacing={3}>
        <Box
          component="img"
          sx={{
            height: 433,
            width: 550,
            maxHeight: { xs: 433, md: 367 },
            maxWidth: { xs: 550, md: 450 },
          }}
          alt={product?.name}
          src={image}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
            // bgcolor: "red",
          }}
        >
          <h3 style={{ marginTop: "auto" }}> {product?.name} </h3>
          <h2> {product?.price} DA </h2>
          <h4 style={{ marginBottom: "auto" }}>{product?.description}</h4>
        </Box>
      </Stack>
    </Box>
  );
}

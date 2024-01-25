import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { productsResponse } from "../api/fetching.apis";
import { urlsType } from "../pages/Marketplace";
import { useNavigate } from "react-router-dom";
type propTypes = {
  products: productsResponse[];
  images: urlsType[];
  searchValue: string;
};
export default function ProductList({
  products,
  images,
  searchValue,
}: propTypes) {
  const navigate = useNavigate();
  const filtredProducts = products.filter((product) => {
    if (searchValue === "") return product;
    return product.name.includes(searchValue);
  });
  return (
    <Grid container spacing={2}>
      {filtredProducts.map((product) => {
        const element = images.filter((element) => {
          if (element.id === product.id) return element;
        });
        const urlImage = element[0].url;
        return (
          <Grid key={product.id} item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea
                onClick={() => {
                  localStorage.setItem("image", urlImage);
                  navigate(`/project/${product.id}`);
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={urlImage}
                  alt="Product Picture"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

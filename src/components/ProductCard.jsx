import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cardSlice";

const ProductCard = (product) => {
  const { title, id, price, description, images } = product;
  const isInCart = useSelector(
    (state) => !!state.cart.products.find((p) => p.id == id)
  );
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(product));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={images[0]} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAdd}>
          <AddShoppingCartIcon color={isInCart?"primary":"success"} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

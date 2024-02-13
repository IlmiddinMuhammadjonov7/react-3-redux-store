import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Unstable_Grid2";
import LoadingCard from "../components/LoadingCard";
import ClearImages from "../utils/ClearImages";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();

      ClearImages(data)

      setProducts(data);
      setLoading(false);
    };
    getProducts()
  }, []);
  return (
    <main style={{ marginTop: "20px" }}>
      <div style={{ padding: "20px" }}>
        <Grid container spacing={2} disableEqualOverflow>
          {loading
            ? [1, 2, 3, 4, 5, 6].map((item) => (
                <Grid key={item} xs={6} md={4}>
                  <LoadingCard />
                </Grid>
              ))
            : products.map((product) => (
                <Grid key={product.id} xs={6} md={4}>
                  <ProductCard {...product} />
                </Grid>
              ))}
        </Grid>
      </div>
    </main>
  );
};

export default Home;

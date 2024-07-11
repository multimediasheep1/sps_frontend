// src/components/ProductList.tsx

import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, TextField, InputAdornment, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/ProductService";
import SearchIcon from '@mui/icons-material/Search';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  //Functions
  const fetchProductList = async () => {
    setLoading(true);
    const products = await getProducts("16");
    if (products) {
      setProducts(products);
      setFilteredProducts(products);
    }
    setLoading(false);
  };

//Hooks
  useEffect(() => {
    fetchProductList();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, products]);

  //Validations
  if (loading) {
    return <CircularProgress />;
  }

  return (
<>
    <Box sx={{ display: 'flex', justifyContent: 'right', marginBottom: 2 }}>
    <TextField
      label="Filter by name"
      variant="outlined"
      margin="normal"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ width: '300px' }}
    />
  </Box>
    <Grid container spacing={3}>
     
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default ProductList;

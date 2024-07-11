// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/ProductService';

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
const fetchProductList = async () => {
  setLoading(true)
  const products = await getProducts("15");
  if(products){
  setProducts(products);
console.log(products,"PRODUCTS")
  }
  setLoading(false)
}

  useEffect(() => {
    fetchProductList();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

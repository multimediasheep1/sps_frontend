import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useCart } from '../../utils/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { addToCart , cart, removeFromCart} = useCart();
  const isProductInCart = (productId: number) => {
    return cart.some((product) => product.id === productId);
  };
    return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom component="div" 
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
      }}>
          {product.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {"$"+product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() =>  isProductInCart(product.id) ? removeFromCart(product.id):addToCart(product) }>
        {isProductInCart(product.id) ? 'Remove' : 'Add to Cart'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

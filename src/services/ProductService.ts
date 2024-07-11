import { Product } from "../screens/ProductList";

export const getProducts = async ( limit: string) => {

    console.log("GET-PRODUCTS");
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit='+limit?? '10', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json: Product[] = await response.json();

      console.log(json);
      return json;
    } catch (error) {
      console.error('There was a problem with the fetch:', error);
    }
  };

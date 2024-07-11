import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Login from "./screens/Login";
import Cart from './screens/Cart';
import ProductList from './screens/ProductList';
import Dashboard from './screens/Dashboard';
import RequireAuth from './navigation/PrivateRoutes';
import { theme } from './assets/theme/theme';

function App() {

  return (
    
    <div className="App">
     <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<Login /> } />
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Route>          
            </Routes>
    </ThemeProvider>
    </div>
  );
}


export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import Login from "./screens/Login";
import Header from "./components/Header";
import Cart from './screens/Cart';
import ProductList from './screens/ProductList';
import PrivateRoute from './navigation/PrivateRoutes';
import Dashboard from './screens/Dashboard';

function App() {
  const defaultTheme = createTheme();

  return (
    <div className="App">
     <ThemeProvider theme={defaultTheme}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Dashboard />} />
            {/* <Route path="/product" element={<ProductList />} /> */}
          </Routes>
    </ThemeProvider>
    </div>
  );
}


export default App;

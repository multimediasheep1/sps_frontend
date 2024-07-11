import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductList from "./ProductList";
import Header from "../components/Header";
import { useCart } from "../utils/CartContext";
// import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default function Dashboard() {
  const { cart, removeFromCart } = useCart();

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Header></Header>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                }}
              >
                <ProductList></ProductList>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Typography variant="h5">Your cart</Typography>
                {cart.length === 0 ? (
                  <Typography variant="body1">Your cart is empty.</Typography>
                ) : (
                  cart.map((product) => (
                    <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="body1">{product.title}</Typography>
                        <Typography variant="body2">${product.price}</Typography>
                      </div>
                      <IconButton onClick={() => removeFromCart(product.id)} color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))
                )}
              </Paper>
            </Grid>
            {/* Recent Orders */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

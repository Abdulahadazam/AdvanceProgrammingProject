import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  CardActions,
  Snackbar,
  Alert,
  Fab,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuality, setSelectedQuality] = useState('All');
  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);


  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product');
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch products');
        }
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedQuality === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.quality === selectedQuality));
    }
  }, [selectedQuality, products]);

  useEffect(() => {
    // Calculate total price whenever the cart changes
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setSnackbarOpen(true);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const handleBuyNow = async () => {
    // Call API to store cart data in the database
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ cart }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data.success) {
      // Empty the cart after successful purchase
      setCart([]);
      setSnackbarOpen(true);
    } else {
      alert('Checkout failed');
    }
  };

  return (
    <>
      <Head>
        <title>Products - ClubMate</title>
        <meta name="description" content="Explore our range of padel products and gear." />
      </Head>

      <Header />

      <Container sx={{ py: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>

        {/* Filter Dropdown */}
        <Box mb={4}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="quality-filter-label">Filter by Quality</InputLabel>
            <Select
              labelId="quality-filter-label"
              id="quality-filter"
              value={selectedQuality}
              label="Filter by Quality"
              onChange={(e) => setSelectedQuality(e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quality: {product.quality}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
                    Coming Soon
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Floating Cart Icon */}
        <Fab
          color="primary"
          aria-label="cart"
          onClick={() => setCartOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1200,
            boxShadow: 4,
          }}
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Fab>
      </Container>

      <Footer />

      {/* Snackbar Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Item added to cart!
        </Alert>
      </Snackbar>

      {/* Cart Dialog */}
      <Dialog open={cartOpen} onClose={() => setCartOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Your Cart</DialogTitle>
        <DialogContent dividers>
          {cart.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            cart.map((item, index) => (
              <Box key={index} mb={2} p={2} border={1} borderRadius={2} borderColor="grey.300">
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Quality: {item.quality}
                </Typography>
                <IconButton
                  color="error"
                  onClick={() => handleRemoveFromCart(item)}
                  sx={{ position: 'absolute', top: 10, right: 10 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))
          )}
          {cart.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCartOpen(false)}>Close</Button>
          {cart.length > 0 && (
            <Button variant="contained" color="primary" onClick={handleBuyNow}>
              Buy Now
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

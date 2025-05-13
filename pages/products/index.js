import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
  Box
} from '@mui/material';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuality, setSelectedQuality] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product');
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch products');
        }
        setProducts(data.products);
        setFilteredProducts(data.products); // Initially show all
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
      setFilteredProducts(products.filter(product => product.quality === selectedQuality));
    }
  }, [selectedQuality, products]);

  return (
    <>
      <Head>
        <title>Products - ClubMate</title>
        <meta name="description" content="Explore our range of padel products and gear." />
      </Head>

      <Header />

      <Container sx={{ py: 8 }}>
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
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.quality}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
                    Coming Soon
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

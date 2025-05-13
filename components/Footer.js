import { Box, Container, Grid, Typography, IconButton, TextField, Button, Link, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, Email, Phone, LocationOn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: '#1a1b41', 
      color: 'white', 
      py: 5,
      borderTop: '4px solid #3a86ff'
    }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              ClubMate
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your premier destination for sports and shopping, all in one place.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton 
                color="inherit" 
                href="https://facebook.com" 
                aria-label="Facebook"
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: '#3b5998' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://instagram.com" 
                aria-label="Instagram"
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: '#E1306C' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://twitter.com" 
                aria-label="Twitter"
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: '#1DA1F2' }
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/book" color="inherit" underline="hover">Book a Court</Link>
              <Link href="/shop" color="inherit" underline="hover">Shop Products</Link>
              <Link href="/membership" color="inherit" underline="hover">Membership</Link>
              <Link href="/events" color="inherit" underline="hover">Events</Link>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">123 Sports Avenue, Lahore, Pakistan</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Typography variant="body2">info@clubmate.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">+92 300 1234567</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Subscribe
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stay updated with our latest offers and events.
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField 
                placeholder="Your Email" 
                variant="outlined" 
                size="small"
                fullWidth
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  input: { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                    '&.Mui-focused fieldset': { borderColor: '#3a86ff' }
                  }
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#3a86ff',
                  '&:hover': { backgroundColor: '#2563eb' }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        {/* Bottom Footer */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2">
            © 2025 ClubMate. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy" color="inherit" underline="hover" variant="body2">Privacy Policy</Link>
            <Link href="/terms" color="inherit" underline="hover" variant="body2">Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
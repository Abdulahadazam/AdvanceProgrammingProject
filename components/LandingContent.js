import { useRef, useContext } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/hero.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.common.white,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

export default function LandingContent() {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box component="main">
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to ClubMate
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Book padel courts. Buy pro gear. Join the community.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2, px: 4 }}
              onClick={scrollToBooking}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={Link}
              href="/products"
              sx={{ px: 4 }}
            >
              Shop Gear
            </Button>
          </Box>
        </Container>
      </HeroSection>

      <Section bgcolor="grey.100">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            About ClubMate
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '32rem', mx: 'auto', color: 'text.secondary' }}>
            ClubMate is Pakistan's premier padel club offering world-class courts, coaching, and community. From beginners to pros — we welcome all!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/about"
            sx={{ mt: 3, px: 4 }}
          >
            Learn More
          </Button>
        </Container>
      </Section>
      </Box>
    );
  }

      
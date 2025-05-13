import { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper,
  Alert,
  Snackbar,
  CircularProgress,
  MenuItem
} from '@mui/material';
import { LocationOn, Email, Phone, Send } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#d32f2f' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+92',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Phone number is too short';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({
      ...formData,
      phone: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            countryCode: '+92',
            phone: '',
            message: ''
          });
        } else {
          setSubmitError(true);
        }
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitSuccess(false);
    setSubmitError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Contact Us - ClubMate</title>
        <meta name="description" content="Contact ClubMate for inquiries about padel courts, equipment, or membership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundImage: 'url(/padel-court.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 10, 0.7)',
          }
        }}
      />

      <Box sx={{ pt: 12, pb: 12, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Paper elevation={4} sx={{ 
            p: { xs: 4, md: 6 },
            mb: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '100%',
          }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1a1b41', fontWeight: 'bold', mb: 4 }}>
              Reach out to us today
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" gutterBottom>First Name *</Typography>
                  <TextField
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    required
                    variant="standard"
                    placeholder="First Name"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: '1px solid #ccc', mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" gutterBottom>Last Name</Typography>
                  <TextField
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="standard"
                    placeholder="Last Name"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: '1px solid #ccc', mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" gutterBottom>Email *</Typography>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    variant="standard"
                    placeholder="Email"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: '1px solid #ccc', mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Typography variant="body2" gutterBottom>Code *</Typography>
                      <TextField
                        select
                        fullWidth
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{ borderBottom: '1px solid #ccc', mb: 2 }}
                      >
                        <MenuItem value="+92">+92</MenuItem>
                        <MenuItem value="+1">+1</MenuItem>
                        <MenuItem value="+44">+44</MenuItem>
                        <MenuItem value="+91">+91</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="body2" gutterBottom>Phone *</Typography>
                      <TextField
                        fullWidth
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        required
                        variant="standard"
                        placeholder="Phone"
                        InputProps={{ disableUnderline: true }}
                        sx={{ borderBottom: '1px solid #ccc', mb: 2 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" gutterBottom>Your Message *</Typography>
                  <TextField
                    fullWidth
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    variant="standard"
                    placeholder="Your Message"
                    InputProps={{ disableUnderline: true }}
                    sx={{ borderBottom: '1px solid #ccc', mb: 3 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      sx={{ py: 1.5, px: 4, borderRadius: 1 }}
                    >
                      SEND
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>

          <Paper elevation={4} sx={{ 
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            backgroundColor: '#1a1b41',
            color: 'white',
            maxWidth: '100%',
          }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Contact Information
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 5 }}>
              Fill out the form and we will get back to you within 24 hours
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 0 } }}>
                  <Phone sx={{ mr: 2, fontSize: 22 }} />
                  <Typography variant="body1">+92 300 1234567</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 0 } }}>
                  <Email sx={{ mr: 2, fontSize: 22 }} />
                  <Typography variant="body1">info@clubmate.com</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <LocationOn sx={{ mr: 2, fontSize: 22, mt: 0.5 }} />
                  <Typography variant="body1">123 Sports Avenue, Lahore, Pakistan</Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Business Hours
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2">Monday - Friday:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>9:00 AM - 9:00 PM</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2">Saturday:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>10:00 AM - 8:00 PM</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="body2">Sunday:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'medium' }}>10:00 AM - 6:00 PM</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ py: 6, bgcolor: 'rgba(245, 245, 245, 0.9)', position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ 
            color: '#1a1b41', 
            fontWeight: 'bold',
            mb: 4
          }}>
            Find Us Here
          </Typography>
          <Box sx={{ 
            borderRadius: 4, 
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Container>
      </Box>

      <Snackbar open={submitSuccess} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>

      <Snackbar open={submitError} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          There was an error sending your message. Please try again later.
        </Alert>
      </Snackbar>

      <Footer />
    </ThemeProvider>
  );
}

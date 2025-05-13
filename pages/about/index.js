import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  IconButton,
  ThemeProvider,
  createTheme,
} from '@mui/material';

// Import Header and Footer from components directory
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Material icons v7 import style
import AddIcon from '@mui/icons-material/Add';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import SportsIcon from '@mui/icons-material/Sports';

// Theme configuration - enhanced with consistent colors
const theme = createTheme({
  palette: {
    primary: { 
      main: '#004d40',  // dark green
      light: '#1aff9c',  // light green for accents
    },
    secondary: { 
      main: '#1a1b41',  // navy blue
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      dark: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          fontWeight: 600,
        },
      },
    },
  },
});

// FAQ data
const faqItems = [
  {
    question: 'WHAT IS PADEL CLUB?',
    answer: 'The Padel Club is a unique fitness and play space where you can play on custom-designed courts that combine exercise with fun games. Its a great way to stay active and connect with others in an enjoyable setting.'
  },
  {
    question: 'HOW DO I BOOK A COURT?',
    answer: 'Booking a court is easy! You can reserve your preferred time slot through our online booking system on our website or mobile app. Simply create an account, select your desired date and time, and complete the booking process.'
  },
  {
    question: 'DO I NEED ANY PRIOR EXPERIENCE?',
    answer: 'No prior experience is needed! Padel is easy to learn and suitable for all skill levels. We offer introductory sessions for beginners and equipment rental, so you can start playing right away regardless of your experience level.'
  },
  {
    question: 'WHAT SHOULD I BRING?',
    answer: 'Just bring comfortable sports attire and athletic shoes! We provide all the necessary equipment including rackets and balls for rent, though many regular players eventually purchase their own padel racket.'
  }
];

// Club benefits
const clubBenefits = [
  {
    icon: <SportsTennisIcon sx={{ fontSize: 40, color: '#1aff9c' }} />,
    title: 'BRANDED EQUIPMENT',
    description: 'Access top-of-the-line, branded sports equipment to enhance your game.'
  },
  {
    icon: <Box 
      component="div" 
      sx={{ 
        width: 40, 
        height: 40, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="6" width="20" height="28" stroke="#1aff9c" strokeWidth="2" />
        <line x1="7" y1="10" x2="33" y2="10" stroke="#1aff9c" strokeWidth="2" />
        <line x1="7" y1="30" x2="33" y2="30" stroke="#1aff9c" strokeWidth="2" />
        <line x1="20" y1="6" x2="20" y2="34" stroke="#1aff9c" strokeWidth="2" />
      </svg>
    </Box>,
    title: 'INTERNATIONAL-STANDARD COURTS',
    description: 'Play on high-quality courts designed to meet global standards for a top-notch experience.'
  },
  {
    icon: <EventAvailableIcon sx={{ fontSize: 40, color: '#1aff9c' }} />,
    title: 'EASY BOOKING SYSTEM',
    description: 'Reserve your court with just a few clicks using our seamless online booking platform.'
  },
  {
    icon: <WifiIcon sx={{ fontSize: 40, color: '#1aff9c' }} />,
    title: 'EXCLUSIVE DISCOUNTS',
    description: 'Enjoy special discounts and offers exclusively for members, helping you save on every visit.'
  },
  {
    icon: <LocalCafeIcon sx={{ fontSize: 40, color: '#1aff9c' }} />,
    title: 'ON-SITE CAFETERIA',
    description: 'Refuel and relax at our cafeteria with a range of snacks and refreshments for all tastes.'
  },
  {
    icon: <LocalParkingIcon sx={{ fontSize: 40, color: '#1aff9c' }} />,
    title: 'FREE PARKING SPOTS',
    description: 'Park with ease in our dedicated member spots.'
  }
];

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      
      {/* Hero Section with Rackets Image - FIXED TEXT VISIBILITY WITH DARK TEXT */}
      <Box sx={{ 
        position: 'relative', 
        width: '100%', 
        height: { xs: '550px', md: '700px' },
        display: 'flex',
      }}>
        {/* Left side image - using the rackets and tennis balls image */}
        <Box 
          component="img" 
          src="/padel-rackets.jpg"
          alt="Padel Rackets and Balls" 
          sx={{ 
            width: { xs: '100%', md: '60%' }, 
            height: '100%', 
            objectFit: 'cover',
          }}
        />
        
        {/* Black overlay with slogan */}
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: 0, 
            right: 0, 
            width: { xs: '100%', md: '45%' }, 
            bgcolor: 'background.dark', 
            color: 'text.secondary',
            p: { xs: 3, md: 5 },
            zIndex: 2
          }}
        >
          <Typography variant="h4" component="h2" sx={{ 
            fontWeight: 'bold', 
            mb: 0,
            textTransform: 'uppercase',
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            OUR COURTS ARE THE BEST IN TOWN!!
          </Typography>
        </Box>
        
        {/* Right side content - FIXED TEXT VISIBILITY */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '40%',
            p: { md: 4, lg: 6 },
            bgcolor: 'background.paper'
          }}
        >
          <Typography 
            variant="subtitle1" 
            component="p" 
            sx={{ 
              color: '#004d40', 
              fontWeight: 600,
              mb: 1 
            }}
          >
            THE PADEL CLUB
          </Typography>
          
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontSize: { md: '2.8rem', lg: '3.5rem' },
              color: '#000000', // Ensured dark text for visibility
            }}
          >
            Discover The Joy Of Active Play At The Padel Club!
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ color: '#333333' }}> {/* Darker text for better visibility */}
            At The Padel Club, we're on a mission to transform the way people experience fitness and fun. We believe that staying active should be enjoyable and that moving together builds stronger connections. Our padel-powered courts are designed to create a unique blend of play, fitness, and social interaction—perfect for all ages and skill levels.
          </Typography>
          
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              mt: 2, 
              alignSelf: 'flex-start',
              bgcolor: 'background.dark',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: '#004d40',
              }
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>
      
      {/* Mobile content section - only visible on smaller screens - FIXED TEXT VISIBILITY */}
      <Box sx={{ 
        display: { xs: 'block', md: 'none' },
        p: 3,
        mb: 6,
        mt: 2
      }}>
        <Typography 
          variant="subtitle1" 
          component="p" 
          sx={{ 
            color: '#004d40', 
            fontWeight: 600,
            mb: 1 
          }}
        >
          THE PADEL CLUB
        </Typography>
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 3,
            color: '#000000', // Ensured dark text for visibility
          }}
        >
          Discover The Joy Of Active Play At The Padel Club!
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ color: '#333333' }}> {/* Darker text for better visibility */}
          At The Padel Club, we're on a mission to transform the way people experience fitness and fun. We believe that staying active should be enjoyable and that moving together builds stronger connections. Our padel-powered courts are designed to create a unique blend of play, fitness, and social interaction—perfect for all ages and skill levels.
        </Typography>
        
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            mt: 2, 
            borderRadius: 0,
            bgcolor: 'background.dark',
            px: 4,
            py: 1.5,
            '&:hover': {
              bgcolor: '#004d40',
            }
          }}
        >
          BOOK NOW
        </Button>
      </Box>
      
      {/* Our Story Section - Using the player with racket image */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="subtitle1" 
              component="p" 
              sx={{ 
                color: '#004d40', 
                fontWeight: 600,
                mb: 1,
                position: 'relative',
                pl: 3,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: 16,
                  height: 2,
                  bgcolor: '#1aff9c',
                  transform: 'translateY(-50%)'
                }
              }}
            >
              OUR STORY
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                color: '#000000' // Ensured dark text for visibility
              }}
            >
              More Than Just A Club — It's A Community
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#333333' }}> {/* Darker text for better visibility */}
              Founded in 2022, The Padel Club started with a simple mission: to introduce Pakistan to the fast-growing sport of padel and create a vibrant community around it. What began as a small facility with just two courts has grown into the country's premier padel destination.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#333333' }}> {/* Darker text for better visibility */}
              Our passion for padel drives everything we do. We've assembled a team of international coaches, built world-class facilities, and fostered a welcoming atmosphere where players of all levels can thrive. From casual players to competitive athletes, our club offers something for everyone.
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleIcon sx={{ color: '#1aff9c', mr: 2 }} />
                <Typography variant="body1" fontWeight="500" sx={{ color: '#333333' }}>Professional coaching staff</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleIcon sx={{ color: '#1aff9c', mr: 2 }} />
                <Typography variant="body1" fontWeight="500" sx={{ color: '#333333' }}>Regular tournaments and events</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon sx={{ color: '#1aff9c', mr: 2 }} />
                <Typography variant="body1" fontWeight="500" sx={{ color: '#333333' }}>Welcoming community for all skill levels</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box 
                component="img" 
                src="/player-with-racket.jpg"
                alt="Player with Padel Racket" 
                sx={{ 
                  width: '100%', 
                  maxHeight: 550,
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: { xs: 20, md: 30 },
                  left: { xs: 20, md: -30 },
                  bgcolor: '#004d40',
                  p: { xs: 2, md: 3 },
                  borderRadius: 1,
                  maxWidth: { xs: '80%', md: '60%' }
                }}
              >
                <Typography variant="h6" color="white" fontWeight="bold" gutterBottom>
                  Experience Matters
                </Typography>
                <Typography variant="body2" color="white">
                  Our club members have logged over 10,000 hours of play time in the past year alone!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* Club stats section with image background */}
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        py: 10,
        overflow: 'hidden',
        bgcolor: 'background.dark',
      }}>
        {/* Background image with overlay */}
        <Box 
          component="img" 
          src="/padel-rackets.jpg" 
          alt="Padel Rackets" 
          sx={{ 
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.2
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="subtitle1" 
            component="p"
            align="center" 
            sx={{ 
              color: '#1aff9c', 
              fontWeight: 600,
              mb: 1 
            }}
          >
            OUR ACHIEVEMENTS
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            align="center" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 'bold', 
              mb: 6
            }}
          >
            We're Proud To Be The Best At Training
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: '#004d40',
                  color: 'text.secondary', 
                  textAlign: 'center',
                  py: 4,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography variant="h2" component="p" sx={{ fontWeight: 'bold' }}>
                  3
                </Typography>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'medium' }}>
                  YEARS
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'background.dark',
                  color: 'text.secondary', 
                  textAlign: 'center',
                  py: 4,
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography variant="h2" component="p" sx={{ fontWeight: 'bold' }}>
                  6
                </Typography>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'medium' }}>
                  COURTS
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: '#004d40',
                  color: 'text.secondary', 
                  textAlign: 'center',
                  py: 4,
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography variant="h2" component="p" sx={{ fontWeight: 'bold' }}>
                  1200+
                </Typography>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'medium' }}>
                  MEMBERS
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={6} md={3}>
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: 'background.dark',
                  color: 'text.secondary', 
                  textAlign: 'center',
                  py: 4,
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <Typography variant="h2" component="p" sx={{ fontWeight: 'bold' }}>
                  12
                </Typography>
                <Typography variant="h6" component="p" sx={{ fontWeight: 'medium' }}>
                  COACHES
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Player video/image section - Using Image 3 (players at net) with improved text visibility */}
      <Box sx={{ 
        position: 'relative', 
        width: '100%',
        py: 10,
        bgcolor: '#f5f5f5'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Typography 
                variant="subtitle1" 
                component="p" 
                sx={{ 
                  color: '#004d40', 
                  fontWeight: 600,
                  mb: 1,
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    width: 16,
                    height: 2,
                    bgcolor: '#1aff9c',
                    transform: 'translateY(-50%)'
                  }
                }}
              >
                THE EXPERIENCE
              </Typography>
              
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 3,
                  color: '#000000' // Ensured dark text for visibility
                }}
              >
                What Makes Us Different
              </Typography>
              
              <Grid container spacing={3} sx={{ mt: 2 }}>
                {[
                  { icon: <SportsTennisIcon sx={{ color: '#004d40' }} />, title: 'Premium Equipment', desc: 'We provide top-quality rackets and balls for all players' },
                  { icon: <SchoolIcon sx={{ color: '#004d40' }} />, title: 'Expert Coaching', desc: 'Learn from certified instructors with international experience' },
                  { icon: <GroupsIcon sx={{ color: '#004d40' }} />, title: 'Vibrant Community', desc: 'Join a friendly group of padel enthusiasts at all levels' },
                  { icon: <SportsIcon sx={{ color: '#004d40' }} />, title: 'Regular Tournaments', desc: 'Test your skills in our professionally organized competitions' }
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      <Box sx={{ 
                        mr: 2, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        bgcolor: 'rgba(0,77,64,0.1)'
                      }}>
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 0.5, color: '#000000' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#333333' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Button 
                variant="contained" 
                sx={{ 
                  mt: 3,
                  bgcolor: '#004d40',
                  '&:hover': {
                    bgcolor: 'background.dark',
                  }
                }}
              >
                Learn More
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  component="img" 
                  src="/players-at-net.jpg"
                  alt="Players at the Net" 
                  sx={{ 
                    width: '100%', 
                    borderRadius: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                  }}
                />
                <IconButton 
                  aria-label="play video"
                  sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.3)',
                    },
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ color: 'white', fontSize: { xs: 30, md: 40 } }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="subtitle1" 
              component="p" 
              sx={{ 
                color: '#004d40', 
                fontWeight: 600,
                mb: 1,
                position: 'relative',
                pl: 3,
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  width: 16,
                  height: 2,
                  bgcolor: '#1aff9c',
                  transform: 'translateY(-50%)'
                }
              }}
            >
              COMMON QUESTIONS
            </Typography>
            
            <Typography variant="h3" component="h2" sx={{ 
              fontWeight: 'bold',
              mb: 4,
              color: '#000000' // Ensured dark text for visibility
            }}>
              WHAT IS PADEL CLUB?
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#333333' }}> {/* Darker text for better visibility */}
              The Padel Club is a unique fitness and play space where you can play on custom-designed courts that combine exercise with fun games. It's a great way to stay active and connect with others in an enjoyable setting.
            </Typography>
            
            <Box sx={{ mt: 5 }}>
              {faqItems.slice(1).map((item, index) => (
                <Accordion 
                  key={index}
                  expanded={expanded === `panel${index}`} 
                  onChange={handleAccordionChange(`panel${index}`)}
                  elevation={0}
                  sx={{ 
                    mb: 1.5,
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    borderRadius: 0,
                    '&:before': {
                      display: 'none',
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    sx={{ 
                      px: 0,
                      '& .MuiAccordionSummary-content': {
                        my: 1.5
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0 }}>
                    <Typography variant="body1" sx={{ color: '#333333' }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src="/player-with-racket.jpg"
              alt="Player with Padel Racket" 
              sx={{ 
                width: '100%', 
                height: '100%',
                minHeight: { xs: '300px', md: '100%' },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            />
          </Grid>
        </Grid>
      </Container>
      
      {/* Club benefits section - IMPROVED SPACING AND ALIGNMENT */}
      <Box sx={{ bgcolor: 'background.dark', color: 'text.secondary', py: 10, mb: 0 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="subtitle1" 
            component="p"
            sx={{ 
              color: '#1aff9c', 
              fontWeight: 600,
              mb: 2  // Consistent spacing
            }}
          >
            MEMBERSHIP BENEFITS
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 'bold', 
              mb: 2  // Consistent spacing
            }}
          >
            More Than Just A Club —
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 'bold', 
              mb: 4  // Consistent spacing
            }}
          >
            It's Your Advantage
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ maxWidth: 800, mb: 6, color: 'rgba(255,255,255,0.9)' }}>
            As a Padel Club member, you enjoy benefits that make every visit more convenient, enjoyable, and rewarding. Here's what we offer:
          </Typography>
          
          <Grid container spacing={6}>
            {clubBenefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ mb: 2 }}>
                  {benefit.icon}
                </Box>
                
                <Typography variant="h6" component="h3" sx={{ 
                  fontWeight: 'bold', 
                  mb: 2,  // Consistent spacing
                  color: 'white',
                  height: 50,  // Fixed height for title to ensure alignment
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {benefit.title}
                </Typography>
                
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)',  // Improved visibility 
                  height: 80  // Fixed height for description to ensure alignment
                }}>
                  {benefit.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
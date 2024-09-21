import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import backgroundImage from "../assets/pexels.jpg";
import logo from '../assets/logo.jpeg';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    zIndex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
      zIndex: -1,
    },
  },
  backdrop: {
    backdropFilter: 'blur(8px)', // Adds blur effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white overlay
    padding: theme.spacing(6),
    borderRadius: '15px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  button: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 4),
    fontSize: '1.1rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container className={classes.backdrop}>
        <Box display="flex" justifyContent="center" mb={4}>
        <img src={logo} alt="Church Logo" style={{ maxWidth: '200px', height: 'auto' }} />
        </Box>
        <Typography variant="h2" className={classes.title} gutterBottom>
          Welcome to Church Of Christ
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Join us in worship and community, where love and faith meet.
        </Typography>
        <Grid container justifyContent="center" spacing={5} sx={{mt: 1}}>
          <Grid item>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Our Services
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

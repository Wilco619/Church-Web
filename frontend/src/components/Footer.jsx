import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: '#282c34', 
      color: 'white', 
      py: 4,
      mt: 'auto', // Ensures the footer is pushed down when content is less
      width: '100%',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Our Church
            </Typography>
            <Typography variant="body2" paragraph>
              We are a community dedicated to spreading love, faith, and hope through Christ. Join us every week for a spiritual experience filled with worship and fellowship.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">+123 456 7890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">info@churchofchrist.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2"> Magadi , Nairobi, Kenya</Typography>
            </Box>
          </Grid>

          {/* Service Times Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Service Times
            </Typography>
            <Typography variant="body2">Sunday: 9:00 AM & 11:00 AM</Typography>
            <Typography variant="body2">Wednesday Bible Study: 7:00 PM</Typography>
            <Typography variant="body2">Friday Prayer Night: 6:00 PM</Typography>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} textAlign="center" sx={{ mt: 4 }}>
            <IconButton component={Link} href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton component={Link} href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
              <Instagram />
            </IconButton>
            <IconButton component={Link} href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            &copy; {new Date().getFullYear()} Church Of Christ. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

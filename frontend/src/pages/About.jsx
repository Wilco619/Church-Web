import React, { useState } from 'react';
import { Typography, Container, Button, Modal, Grid, Paper, Box, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaPeopleArrows, FaHeart, FaUsers } from 'react-icons/fa'; 

// Import images from assets folder
import johnImage from '../assets/pexels.jpg'; 
import janeImage from '../assets/pexels1.jpg'; 
import logo from '../assets/logo.jpeg';

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    { name: 'John Doe', role: 'Pastor', image: johnImage, details: 'John has been leading the church for over 10 years...' },
    { name: 'Jane Smith', role: 'Youth Leader', image: janeImage, details: 'Jane is passionate about youth ministry and community service...' },
    
  ];

  const handleOpenModal = (leader) => {
    setSelectedLeader(leader);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedLeader(null);
  };

  return (
    <Container sx={{ my: 5 }}>
        <Box display="flex" justifyContent="center" mb={4}>
        <img src={logo} alt="Church Logo" style={{ maxWidth: '200px', height: 'auto' }} />
        </Box>
      <Typography variant="h3" align="center" gutterBottom>About Us</Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Grace Church has been serving our community since...
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaHeart size={50} color="#f50057" />
            <Typography variant="h5" gutterBottom>Our Mission</Typography>
            <Typography variant="body1" textAlign="justify">To spread love and hope through faith...<br/>by
implementing culturally effective global partnerships that demonstrate the grace and holiness
of Jesus Christ.</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaUsers size={50} color="#3f51b5" />
            <Typography variant="h5" gutterBottom>Our Vision</Typography>
            <Typography variant="body1" textAlign="justify">To build a welcoming community where everyone can grow in their faith...<br/>See the church establishment within each people group of the world and equipped so that it
can effectively reach the rest of its people group with the life-changing Gospel of Jesus Christ
and to be pro-actively involved in strategic outreach ministries local, nationally and globally. </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
            <FaPeopleArrows size={50} color="#4caf50" />
            <Typography variant="h5" gutterBottom>Our Goals</Typography>
            <Typography variant="body1" textAlign="justify">1.Strengthen our community connections...</Typography>
            <Typography variant="body1" textAlign="justify">2.Support local outreach programs...</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" textAlign="center" sx={{ mt: 5, mb: 3 }} gutterBottom>Church Leaders</Typography>
      <LeadersCarousel leaders={leaders} onLeaderClick={handleOpenModal} />

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
          {selectedLeader && (
            <>
              <Typography variant="h5">{selectedLeader.name}</Typography>
              <Typography variant="body1">{selectedLeader.details}</Typography>
            </>
          )}
          <Button onClick={handleCloseModal} variant="outlined" sx={{ mt: 2 }}>Close</Button>
        </Box>
      </Modal>
    </Container>
  );
};

// Utility function to chunk the leaders into groups of 3
const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

const LeadersCarousel = ({ leaders, onLeaderClick }) => {
  const groupedLeaders = chunkArray(leaders, 3);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        emulateTouch
        transitionTime={500}
        showStatus={false}
        swipeable
        sx={{ width: '100%' }}
      >
        {groupedLeaders.map((group, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
            {group.map((leader) => (
              <Card key={leader.name} sx={{ maxWidth: isSmallScreen ? '100%' : 300, mx: isSmallScreen ? 0 : 2, mb: isSmallScreen ? 2 : 0 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={leader.image}
                  alt={leader.name}
                />
                <CardContent>
                  <Typography variant="h6">{leader.name}</Typography>
                  <Typography variant="subtitle1">{leader.role}</Typography>
                  <Button variant="contained" onClick={() => onLeaderClick(leader)}>More Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default About;

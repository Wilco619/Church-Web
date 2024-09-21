import React from 'react';
import { Typography, Container, List, ListItem, ListItemText, Box } from '@mui/material';
import { FaChurch, FaBook, FaCalendar } from 'react-icons/fa';

const services = [
  {
    name: 'Sunday Worship',
    time: '10:00 AM',
    icon: <FaChurch size={24} style={{ marginRight: 8 }} />,
  },
  {
    name: 'Wednesday Bible Study',
    time: '7:00 PM',
    icon: <FaBook size={24} style={{ marginRight: 8 }} />,
  },
  {
    name: 'Monthly Community Outreach',
    time: 'TBD',
    icon: <FaCalendar size={24} style={{ marginRight: 8 }} />,
  },
];

const Services = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
        Our Services
      </Typography>
      <List>
        {services.map((service, index) => (
          <ListItem key={index} sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', mb: 2, p: 2, boxShadow: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {service.icon}
              <ListItemText primary={service.name} secondary={service.time} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Services;

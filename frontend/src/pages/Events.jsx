import React from 'react';
import { Typography, Container, Card, CardContent, Grid, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { CalendarToday } from '@mui/icons-material';
import logo from '../assets/logo.jpeg';

const Events = () => {
  const events = [
    {
      title: 'Annual Church Picnic',
      description: 'Join us for food, fun, and fellowship.',
      date: '2024-08-20',
      status: 'past',
    },
    {
      title: 'Youth Worship Night',
      description: 'A night of worship led by our youth.',
      date: '2024-09-20',
      status: 'ongoing',
    },
    {
      title: 'Christmas Eve Service',
      description: 'Celebrate Christmas Eve with us.',
      date: '2024-12-24',
      status: 'future',
    },
    {
        title: 'Christmas Eve Service',
        description: 'Celebrate Christmas Eve with us.',
        date: '2024-12-24',
        status: 'future',
    },
  ];

  const getStatusDot = (status) => {
    switch (status) {
      case 'past':
        return <TimelineDot color="grey" />;
      case 'ongoing':
        return <TimelineDot color="primary" />;
      case 'future':
        return <TimelineDot color="success" />;
      default:
        return <TimelineDot />;
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" mb={4}>
        <img src={logo} alt="Church Logo" style={{ maxWidth: '100px', height: 'auto' }} />
        </Box>
      <Typography variant="h3" gutterBottom align="center">
        Church Events
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              {getStatusDot(event.status)}
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ width: '100%', mb: 2 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    {event.description}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CalendarToday sx={{ mr: 1 }} />
                    {new Date(event.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Events;

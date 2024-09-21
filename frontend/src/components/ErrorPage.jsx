import React from 'react'
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container>
    <Typography variant="h2" gutterBottom>404: Page Not Found</Typography>
    <Typography variant="body1" paragraph>We're sorry, but the page you're looking for doesn't exist.</Typography>
    <Button component={Link} to="/">Return to Home</Button>
  </Container>
  )
}

export default ErrorPage
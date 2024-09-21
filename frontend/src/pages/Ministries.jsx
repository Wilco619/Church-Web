import React from 'react'
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

const Ministries = () => {
  return (
    <Container>
    <Typography variant="h3" gutterBottom>Our Ministries</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">Youth Ministry</Typography>
            <Typography variant="body2">Empowering young people in faith...</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Ministries
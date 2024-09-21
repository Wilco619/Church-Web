import React from 'react'
import { Typography, Container, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
    <Typography variant="h3" gutterBottom>Admin Dashboard</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Total Members</Typography>
          <Typography variant="h4">250</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Dashboard
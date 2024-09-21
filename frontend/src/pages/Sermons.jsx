import React from 'react'
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const Sermons = () => {
  return (
    <Container>
    <Typography variant="h3" gutterBottom>Recent Sermons</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Walking in Faith" secondary="Pastor John Doe - May 15, 2023" />
      </ListItem>
    </List>
  </Container>
  )
}

export default Sermons
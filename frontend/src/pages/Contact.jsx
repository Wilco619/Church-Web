import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Paper, Grid } from '@mui/material';
import { Send as SendIcon, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h2" className="mb-6 text-center font-bold text-indigo-600">
        Get in Touch
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="p-6">
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                className="mb-4"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                className="mb-4"
              />
              <Button
                type="submit"
                variant="outlined"
                color="info"
                startIcon={<SendIcon />}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6 h-full flex flex-col">
            <Typography variant="h5" className="mb-4 font-semibold flex items-center">
              <MapPin className="mr-2" /> Our Location
            </Typography>
            <Box className="flex-grow mb-4" style={{ minHeight: '400px' }}> {/* Increased height here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5181.340831597795!2d36.851503433248325!3d-1.2732222077839983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16b0ee319afd%3A0xdb381d9f56ee016f!2sChurch%20of%20Christ!5e0!3m2!1sen!2ske!4v1726927923222!5m2!1sen!2ske" 
                width="100%" 
                height="400px" 
                style={{border: 0}} 
                allowFullScreen="true" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <Box>
              <Typography variant="body1" className="mb-2">
                123 Business Street, Suite 100
              </Typography>
              <Typography variant="body1" className="mb-2">
                Techville, CA 90210
              </Typography>
              <Typography variant="body1" className="mb-2">
                Phone: (555) 123-4567
              </Typography>
              <Typography variant="body1">
                Email: contact@example.com
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
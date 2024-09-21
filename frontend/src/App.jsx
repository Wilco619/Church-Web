import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { lightTheme, darkTheme } from './Theme';
import Navbar from './components/NavBar';
import ScrollUpButton from './components/ScrollUpButton';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {/* Main container for layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          mt:'80px'
        }}
      >
        {/* Navbar and main content */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* This allows scrolling of content */}
          <Outlet />
          {/* <Sermons /> */}
        </Box>

        {/* Scroll up button */}
        <ScrollUpButton />
        
        {/* Footer will appear after the content */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

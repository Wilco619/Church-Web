import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, Switch, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from '../assets/logo.jpeg';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginLeft: theme.spacing(2),
}));

const DrawerList = styled(List)(({ theme }) => ({
  width: 250,
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Events', path: '/events' },
    { text: 'Contact', path: '/contact' },
  ];

  const list = () => (
    <DrawerList
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {navItems.map((item) => (
        <ListItem button key={item.text} component={Link} to={item.path}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
      <ListItem>
        <ListItemText primary="Dark Mode" />
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </ListItem>
    </DrawerList>
  );

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <LogoBox>
          <img src={logo} alt="Church Logo" style={{ maxWidth: '50px', height: 'auto' }} />
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Church Of Christ
          </Typography>
        </LogoBox>
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center">
            {navItems.map((item) => (
              <NavButton key={item.text} component={Link} to={item.path}>
                {item.text}
              </NavButton>
            ))}
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        )}
      </StyledToolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
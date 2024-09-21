// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#87CEEB', // Sky Blue
    },
    secondary: {
      main: '#DC143C', // Crimson
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#87CEEB', // Sky Blue
    },
    secondary: {
      main: '#DC143C', // Crimson
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export { lightTheme, darkTheme };
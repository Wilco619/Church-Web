// File: src/main.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './Theme'; // Import both themes
import App from './App';
import './index.css';

// Authentication
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';

// Admin Pages
import Dashboard from './components/Admin/Dashboard';
import ManageUsers from './components/Admin/ManageUsers';
import ManageEvents from './components/Admin/ManageEvents';
import ManageSermons from './components/Admin/ManageSermons';
import ManageMinistries from './components/Admin/ManageMinistries';

// Error Page
import ErrorPage from './components/ErrorPage';

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="events" element={<Events />} />
            <Route path="sermons" element={<Sermons />} />
            <Route path="ministries" element={<Ministries />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="sermons" element={<ManageSermons />} />
            <Route path="ministries" element={<ManageMinistries />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
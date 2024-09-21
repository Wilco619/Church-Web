// src/components/ScrollUpButton.jsx
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled, keyframes } from '@mui/material/styles';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(135, 206, 235, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(135, 206, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(135, 206, 235, 0);
  }
`;

const PulsingFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  animation: `${pulse} 2s infinite`,
}));

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <PulsingFab sx={{color: 'crimson'}} size='small' onClick={scrollToTop} aria-label="scroll to top">
          <KeyboardArrowUpIcon />
        </PulsingFab>
      )}
    </>
  );
};

export default ScrollUpButton;
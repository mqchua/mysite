import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Mouse from '../components/Mouse';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import StyledSection from '../components/StyledSection';

const theme = createTheme({
  typography: {
    name: {
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontSize: 40,
      display: 'block',
    },
    title: {
      fontFamily: 'Montserrat',
      fontWeight: 'regular',
      fontSize: 12,
      display: 'block',
      opacity: 0.7,
    },
    button: {
      textTransform: 'none',
      fontFamily: 'Montserrat',
      fontWeight: 'regular',
      fontSize: 12,
      outline: 'solid',
      outlineColor: '#jjj',
      outlineWidth: '1px',
      outlineOpacity: '0.5',
    },
  },
});

export default function AboutMe() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledSection style={{ height: `${height}px` }}>
      <ThemeProvider theme={theme}>
        <Typography data-testid='name' variant='name' pt={10}>
          Ming Quan
        </Typography>
        <Typography data-testid='title' variant='title' pt={2} pb={8}>
          Aspiring Data Engineer
        </Typography>
        <Button data-testid='resume' variant='button' pt={2}>
          Resume
        </Button>
        <Mouse />
      </ThemeProvider>
    </StyledSection>
  );
}

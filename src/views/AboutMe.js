import * as React from 'react';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Mouse from '../components/Mouse';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

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
  return (
    <ThemeProvider theme={theme}>
      <Typography variant='name' pt={10}>
        Ming Quan
      </Typography>
      <Typography variant='title' pt={2} pb={8}>
        Aspiring Data Engineer
      </Typography>
      <Button variant='button' pt={2}>
        Resume
      </Button>
      <Mouse />
    </ThemeProvider>
  );
}

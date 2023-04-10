import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyledButton from '../components/StyledButton';

export default function ButtonAppBar() {
  function scrollToEnd() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  function scrollToExperience() {
    const element = document.getElementById('my-experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: '#FAF7F0' }}>
        <Toolbar style={{ backgroundColor: '#FAF7F0' }}>
          <Typography color='black' variant='h6' component='div' sx={{ flexGrow: 1 }}></Typography>
          <StyledButton>About</StyledButton>
          <StyledButton onClick={scrollToExperience}>Experience</StyledButton>
          <StyledButton onClick={scrollToEnd}>Contact</StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

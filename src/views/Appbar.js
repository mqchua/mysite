import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
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
    <AppBar position='static' elevation={0} style={{ background: '#FAF7F0' }}>
      <Toolbar>
        <Grid style={{ flexGrow: 1 }}></Grid>
        <StyledButton>About</StyledButton>
        <StyledButton onClick={scrollToExperience}>Experience</StyledButton>
        <StyledButton onClick={scrollToEnd}>Contact</StyledButton>
      </Toolbar>
    </AppBar>
  );
}

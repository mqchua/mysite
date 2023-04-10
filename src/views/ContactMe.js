import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

export default function ContactMe() {
  return (
    <Grid
      container
      spacing={2}
      paddingTop={3}
      padingBottom={3}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Grid item>
        <Link target='_blank' href='https://www.linkedin.com/in/ming-quan-chua/'>
          <LinkedInIcon />
        </Link>
        <Link target='_blank' href='github.com/mqchua'>
          <GitHubIcon />
        </Link>
        <Link target='_blank' href='mailto:chua_ming_quan@live.com'>
          <MailIcon />
        </Link>
      </Grid>
    </Grid>
  );
}

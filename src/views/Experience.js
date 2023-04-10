import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Internship from '../components/Internship';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function Timeline() {
  return (
    <Box>
      <Grid
        container
        spacing={4}
        paddingTop={3}
        paddingBottom={3}
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Typography variant={'h5'} id='my-experience'>
            EXPERIENCE
          </Typography>
          <Divider
            sx={{ borderBottomWidth: '3px', background: 'black' }}
            orientation='horizontal'
          />
        </Grid>
        <Grid item xs={12}>
          <Internship
            title={'GovTech Singapore'}
            description={'Data Engineer Intern'}
            period={'Summer 2023'}
          ></Internship>
        </Grid>
        <Grid item xs={12}>
          <Internship
            title={'Grab'}
            description={'Data Engineer Intern'}
            period={'Summer 2022'}
          ></Internship>
        </Grid>
        <Grid item xs={12}>
          <Internship
            title={'GXS Bank'}
            description={'Data Governance Intern'}
            period={'Spring 2022'}
          ></Internship>
        </Grid>
        <Grid item xs={12}>
          <Internship
            title={'World Wildlife Fund'}
            description={'Web Developer Intern'}
            period={'Summer 2021'}
          ></Internship>
        </Grid>
      </Grid>
    </Box>
  );
}

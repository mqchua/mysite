import * as React from 'react';
import Intern from '../components/StyledIntern';
import StyledSection from '../components/StyledSection';
import Typography from '@mui/material/Typography';
import StyledDivider from '../components/StyledDivider';

export default function Experience() {
  return (
    <StyledSection>
      <Typography variant={'h5'}>EXPERIENCE</Typography>
      <StyledDivider />
      <Intern
        title={'GovTech Singapore'}
        description={'Data Engineer Intern'}
        period={'Summer 2023'}
      />
      <Intern title={'Grab'} description={'Data Engineer Intern'} period={'Summer 2022'} />
      <Intern title={'GXS Bank'} description={'Data Governance Intern'} period={'Spring 2022'} />
      <Intern
        title={'World Wildlife Fund'}
        description={'Web Developer Intern'}
        period={'Summer 2021'}
      />
    </StyledSection>
  );
}

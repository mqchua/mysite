import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import StyledSection from '../components/StyledSection';
import StyledIcon from '../components/StyledIcon';

export default function ContactMe() {
  return (
    <StyledSection style={{ height: '200px' }} pt={8}>
      <StyledIcon icon={<LinkedInIcon />} link='https://www.linkedin.com/in/ming-quan-chua/' />
      <StyledIcon icon={<GitHubIcon />} link='https://github.com/mqchua' />
      <StyledIcon icon={<MailIcon />} link='mailto:chua_ming_quan@live.com' />
    </StyledSection>
  );
}

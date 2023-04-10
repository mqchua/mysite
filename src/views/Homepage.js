import { useEffect, useState } from 'react';
import ButtonAppBar from './Appbar';
import StyledBox from '../components/StyledBox';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Experience from './Experience';

export default function Homepage() {
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
    <div>
      <ButtonAppBar />
      <StyledBox style={{ backgroundColor: '#FAF7F0', height: `${height}px` }}>
        <AboutMe />
      </StyledBox>
      <StyledBox style={{ backgroundColor: '#FAF7F0', height: 'auto' }}>
        <Experience />
      </StyledBox>
      <StyledBox style={{ backgroundColor: '#FAF7F0', height: '200px' }}>
        <ContactMe />
      </StyledBox>
    </div>
  );
}

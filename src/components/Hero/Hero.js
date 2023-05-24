import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello, my name is <br />
        Coleman Escue
      </SectionTitle>
        
      <SectionText>
        Software Engineer with a passion for problem-solving and empathy honed from a background in ministry, seeking to make an impact through innovative applications and collaboration.
      </SectionText>

      <Button onClick={() => window.open('/resume/Coleman-Escue-Resume.pdf', '_blank')}>View Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
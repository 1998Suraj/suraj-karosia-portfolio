import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <Container>
        <Typography variant="h2" gutterBottom>About Me</Typography>
        <Typography variant="body1">Add your information about yourself here.</Typography>
      </Container>
    </section>
  );
}

export default AboutSection;

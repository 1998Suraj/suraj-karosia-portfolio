import React from 'react';
import { Container, Typography } from '@mui/material';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience">
      <Container>
        <Typography variant="h2" gutterBottom>Experience</Typography>
        <Typography variant="body1">Add your work experience here.</Typography>
      </Container>
    </section>
  );
}

export default ExperienceSection;

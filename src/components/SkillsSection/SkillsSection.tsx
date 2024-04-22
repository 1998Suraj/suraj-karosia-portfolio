import React from 'react';
import { Container, Typography } from '@mui/material';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <Container>
        <Typography variant="h2" gutterBottom>Skills</Typography>
        <Typography variant="body1">Add your skills here.</Typography>
      </Container>
    </section>
  );
}

export default SkillsSection;

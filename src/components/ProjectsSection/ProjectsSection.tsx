import React from 'react';
import { Container, Typography } from '@mui/material';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <Container>
        <Typography variant="h2" gutterBottom>Projects</Typography>
        <Typography variant="body1">Add your projects here.</Typography>
      </Container>
    </section>
  );
}

export default ProjectsSection;

import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <section id="contact">
      <Container>
        <Typography variant="h2" gutterBottom>Contact Me</Typography>
        <Typography variant="body1">Add your contact form here.</Typography>
      </Container>
    </section>
  );
}

export default ContactForm;

import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const CompanyDetails = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Company Details
        </Typography>
        <Typography variant="h6">Banking Card Payment Solutions</Typography>
        <Typography variant="body1">
          Our company specializes in providing secure and efficient card payment solutions 
          for businesses. We ensure seamless transactions and high security for all users. 
        </Typography>
        <Typography variant="body1" style={{ marginTop: 10 }}>
          Key Features:
        </Typography>
        <ul>
          <li>Real-time transaction monitoring</li>
          <li>Fraud detection and prevention</li>
          <li>User-friendly interface</li>
          <li>24/7 Customer Support</li>
        </ul>
        <Typography variant="body1">
          With our solutions, you can manage transactions effectively and improve customer 
          satisfaction. Join us in revolutionizing your payment processes!
        </Typography>
      </Paper>
    </Container>
  );
};

export default CompanyDetails;

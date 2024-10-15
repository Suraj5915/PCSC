import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Home = () => {
  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to PCSC
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Expert Solutions for Efficient Card Payment Processing
      </Typography>
      
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Secure Transactions
              </Typography>
              <Typography color="textSecondary">
                Ensure your payments are safe with our advanced encryption methods.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Instant Payments
              </Typography>
              <Typography color="textSecondary">
                Experience instant payment processing for all your transactions.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                24/7 Support
              </Typography>
              <Typography color="textSecondary">
                Our dedicated support team is available around the clock to assist you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

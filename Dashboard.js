import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to PCSC Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5">Staff Overview</Typography>
                <Typography variant="body1">
                  View the list of all staff members working at Pandey Software Consultancy Services.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5">Company Information</Typography>
                <Typography variant="body1">
                  Access all company-related details like registration, tagline, and more.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

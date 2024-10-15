import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          PCSC Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/staffs">
          Staffs
        </Button>
        <Button color="inherit" component={Link} to="/company-details">
          Company Details
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

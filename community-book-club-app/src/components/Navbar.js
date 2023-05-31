import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1 }}>
          Book Club
        </Typography>
        <Button color="inherit" component={Link} to="/bookclubs">
          Book Clubs
        </Button>
        <Button color="inherit" component={Link} to="/recommendations">
          Recommendations
        </Button>
        <Button color="inherit" component={Link} to="/discussions">
          Discussions
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
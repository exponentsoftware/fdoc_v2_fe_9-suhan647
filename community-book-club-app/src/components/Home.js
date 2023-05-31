import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';


const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Featured Book Clubs
      </Typography>
      <Typography variant="h4" gutterBottom>
        Recommended Books
      </Typography>
      <Typography variant="h4" gutterBottom>
        Upcoming Events
      </Typography>
    </div>
  );
};

export default Home;
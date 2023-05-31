import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { bookClubs } from './bookClubData';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Featured Book Clubs
      </Typography>
      <Grid container spacing={2}>
        {bookClubs.map((bookClub) => (
          <Grid item xs={12} sm={6} md={4} key={bookClub.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {bookClub.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {bookClub.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Members: {bookClub.members}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description: {bookClub.description}
                </Typography>
                <Link   to={`/bookclubs/${bookClub.id}`}>
                  <Typography variant="body2" color="primary">
                    View Details
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>
        Recommended Books
      </Typography>
      {/* Display recommended books */}
      
      <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>
        Upcoming Events
      </Typography>
      {/* Display upcoming events */}
    </div>
  );
};

export default Home;

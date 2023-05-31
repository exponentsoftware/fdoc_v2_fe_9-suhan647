import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { bookClubs } from './bookClubData';

const BookClubList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Book Clubs
      </Typography>
      {bookClubs.length > 0 ? (
        bookClubs.map((bookClub) => (
          <Card key={bookClub.id} style={{ marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <Link to={`/bookclubs/${bookClub.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {bookClub.name}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Location: {bookClub.location}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Description: {bookClub.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Members: {bookClub.members}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No book clubs available.</Typography>
      )}
    </div>
  );
};

export default BookClubList;

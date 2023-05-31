import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { bookClubs } from './bookClubData';

const BookClubList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ color: '#333', marginBottom: '1rem', textAlign: 'center' }}>
        Book Clubs
      </Typography>
      {bookClubs.length > 0 ? (
        bookClubs.map((bookClub) => (
          <Card
            key={bookClub.id}
            style={{
              marginBottom: '1rem',
              backgroundColor: '#f5f5f5',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom style={{ color: '#333' }}>
                <Link
                  to={`/bookclubs/${bookClub.id}`}
                  style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
                >
                  {bookClub.name}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom style={{ color: '#777' }}>
                Location: {bookClub.location}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ color: '#555' }}>
                Description: {bookClub.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{ color: '#555' }}>
                Members: {bookClub.members}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" style={{ color: '#666', textAlign: 'center' }}>
          No book clubs available.
        </Typography>
      )}
    </div>
  );
};

export default BookClubList;

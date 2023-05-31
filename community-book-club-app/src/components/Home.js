import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { bookClubs, upcomingEvents, recommendedBooks } from './bookClubData';
import '../styles.css';
import { Box } from '@mui/system';

const Home = () => {
  const featuredBookClubs = bookClubs.slice(0, 5);
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Featured Book Clubs
      </Typography>
      <Grid container spacing={2}>
        {featuredBookClubs.map((bookClub) => (
          <Grid item xs={12} sm={6} md={4} key={bookClub.id}>
            <Card className="book-club-card">
              <CardContent>

                <Typography variant="h5" component="h2" className="book-club-name">
                  {bookClub.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-club-details">
                  Location: {bookClub.location}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-club-details">
                  Members: {bookClub.members}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-club-details">
                  Description: {bookClub.description}
                </Typography>
                <Link to={`/bookclubs/${bookClub.id}`} className="view-details-link">
                  <Typography variant="body2" color="primary" className="view-details-text">
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
      <Grid container spacing={2}>
        {recommendedBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
                <Box>
                  <img src={book.image} alt='re' height='300' width ='300' />
                </Box>
                <Typography variant="h5" component="h2" className="book-title">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-details">
                  Author: {book.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-details">
                  Genre: {book.genre}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="book-details">
                  Rating: {book.rating}
                </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>
        Upcoming Events
      </Typography>
      <Grid container spacing={2}>
  {upcomingEvents.map((event) => (
    <Grid item xs={12} sm={6} md={4} key={event.id}>
      <Card className="event-card">
        <CardContent>
          <Typography variant="h5" component="h2" className="event-title">
            {event.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="event-details">
            Date: {event.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="event-details">
            Time: {event.time}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="event-details">
            Location: {event.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="event-details">
            Description: {event.description}
          </Typography>
          <img src={event.image} alt="event_image" style={{ width: '100%', marginTop: '1rem' }} />
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </div>
  );
};

export default Home;

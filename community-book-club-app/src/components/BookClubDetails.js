import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { bookClubs } from './bookClubData';
import RecommendationForm from './RecommendationForm';

const BookClubDetails = () => {
  const { id } = useParams();
  const selectedBookClub = bookClubs.find((bookClub) => bookClub.id === parseInt(id));
  const [recommendations, setRecommendations] = useState([]);

  if (!selectedBookClub) {
    return <Typography variant="body1">Book club not found.</Typography>;
  }

  const handleRecommendationSubmit = (recommendation) => {
    setRecommendations([...recommendations, recommendation]);
  };

  const handleJoinClub = () => {
    console.log('Joined the book club:', selectedBookClub.name);
    alert(`Joined the book club: ${selectedBookClub.name}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        {selectedBookClub.name}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Location: {selectedBookClub.location}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {selectedBookClub.description}
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <Button variant="contained" color="primary" onClick={handleJoinClub}>
          Join Club
        </Button>
      </div>

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '2rem' }}>
        Recommendations
      </Typography>

      {recommendations.length > 0 ? (
        <List style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', marginTop: '1rem' }}>
          {recommendations.map((recommendation, index) => (
            <ListItem key={index} style={{ borderBottom: '1px solid #ccc' }}>
              <ListItemText
                primary={`${recommendation.bookTitle} by ${recommendation.bookAuthor}`}
                secondary={
                  <>
                    <Typography variant="body2" component="span" color="textSecondary">
                      Description: {recommendation.description}
                    </Typography>
                    <br />
                    <Typography variant="body2" component="span" color="textSecondary">
                      Reasons for Recommendation: {recommendation.reasons}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" align="center" style={{ marginTop: '1rem', color: '#666' }}>
          No recommendations available.
        </Typography>
      )}

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '2rem' }}>
        Submit a Recommendation
      </Typography>

      <RecommendationForm onRecommendationSubmit={handleRecommendationSubmit} />
    </div>
  );
};

export default BookClubDetails;

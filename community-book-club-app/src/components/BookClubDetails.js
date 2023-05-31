import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import { bookClubs } from './bookClubData';
import RecommendationForm from './RecommendationForm';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  marginTop: '1rem',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
}));

const BookClubDetails = () => {
  const { id } = useParams();
  const selectedBookClub = bookClubs.find((bookClub) => bookClub.id === parseInt(id));
  const [recommendations, setRecommendations] = useState();

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
        <GradientButton onClick={handleJoinClub}>Join Club</GradientButton>
      </div>

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '2rem', color: '#333' }}>
        Recommendations
      </Typography>

      {recommendations.length > 0 ? (
        <List style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', marginTop: '1rem' }}>
          {recommendations.map((recommendation, index) => (
            <ListItem
              key={index}
              style={{ borderBottom: '1px solid #ccc', backgroundColor: '#ffffff', marginBottom: '8px' }}
            >
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

      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '2rem', color: '#333' }}>
        Submit a Recommendation
      </Typography>

      <RecommendationForm onRecommendationSubmit={handleRecommendationSubmit} />
    </div>
  );
};

export default BookClubDetails;

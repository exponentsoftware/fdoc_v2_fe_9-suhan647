import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { bookClubs } from './bookClubData';

const BookClubDetails = () => {
  const { id } = useParams();
  const selectedBookClub = bookClubs.find((bookClub) => bookClub.id === parseInt(id));

  if (!selectedBookClub) {
    return <Typography variant="body1">Book club not found.</Typography>;
  }

  const handleJoinClub = () => {
    console.log('Joined the book club:', selectedBookClub.name);
    alert(`Joined the book club: ${selectedBookClub.name}`)
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {selectedBookClub.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Location: {selectedBookClub.location}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Meeting Schedule: {selectedBookClub.meetingSchedule}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {selectedBookClub.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Members:
      </Typography>
      {selectedBookClub.members.length > 0 ? (
        <List dense>
          {selectedBookClub.members.map((member) => (
            <ListItem key={member.id}>
              <ListItemText primary={member.name} secondary={member.email} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="textSecondary">
          No members in this book club.
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleJoinClub}>
        Join Club
      </Button>
    </div>
  );
};

export default BookClubDetails;

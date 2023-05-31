import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const RecommendationForm = ({ onRecommendationSubmit }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [reasons, setReasons] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const recommendation = {
      bookTitle,
      bookAuthor,
      description,
      reasons,
    };

    onRecommendationSubmit(recommendation);

    setBookTitle('');
    setBookAuthor('');
    setDescription('');
    setReasons('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <TextField
        required
        label="Book Title"
        variant="outlined"
        value={bookTitle}
        onChange={(event) => setBookTitle(event.target.value)}
      />
      <TextField
        required
        label="Book Author"
        variant="outlined"
        value={bookAuthor}
        onChange={(event) => setBookAuthor(event.target.value)}
      />
      <TextField
        required
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TextField
        required
        label="Reasons for Recommendation"
        variant="outlined"
        multiline
        rows={4}
        value={reasons}
        onChange={(event) => setReasons(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Recommendation
      </Button>
    </Box>
  );
};

export default RecommendationForm;

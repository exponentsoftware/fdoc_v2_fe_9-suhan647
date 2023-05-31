import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const DiscussionBoard = () => {
  const [discussionThreads, setDiscussionThreads] = useState([]);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadAuthor, setNewThreadAuthor] = useState('');

  const handleNewThreadSubmit = (event) => {
    event.preventDefault();

    const newThread = {
      title: newThreadTitle,
      author: newThreadAuthor,
      comments: [],
      timestamp: new Date().toLocaleString(),
    };

    setDiscussionThreads([...discussionThreads, newThread]);
    setNewThreadTitle('');
    setNewThreadAuthor('');
  };

  const handleCommentSubmit = (threadIndex) => {
    return (event) => {
      event.preventDefault();

      const comment = event.target.comment.value;
      if (comment) {
        const updatedThreads = [...discussionThreads];
        updatedThreads[threadIndex].comments.push({
          text: comment,
          author: 'Anonymous',
          timestamp: new Date().toLocaleString(),
        });

        setDiscussionThreads(updatedThreads);
        event.target.comment.value = '';
      }
    };
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Discussion Board
      </Typography>

      {/* New Thread Form */}
      <form onSubmit={handleNewThreadSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <TextField
        sx={{margin:'10px'}}
          required
          label="Thread Title"
          variant="outlined"
          margin="normal"
          value={newThreadTitle}
          onChange={(event) => setNewThreadTitle(event.target.value)}
        />
        <TextField
         sx={{margin:'10px'}}
          required
          label="Your Name"
          variant="outlined"
          margin="normal"
          value={newThreadAuthor}
          onChange={(event) => setNewThreadAuthor(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary"  sx={{margin:'10px', width:'300px'}} >
          Create Thread
        </Button>
      </form>

      {/* Discussion Threads */}
      {discussionThreads.length > 0 ? (
        discussionThreads.map((thread, index) => (
          <div key={index} style={{ marginTop: '1rem' }}>
            <Typography variant="h6" style={{ marginBottom: '0.5rem' }}>
              {thread.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Posted by: {thread.author} | {thread.timestamp}
            </Typography>
            <List dense>
              {thread.comments.map((comment, commentIndex) => (
                <ListItem key={commentIndex}>
                  <ListItemText
                    primary={comment.text}
                    secondary={`${comment.author} | ${comment.timestamp}`}
                  />
                </ListItem>
              ))}
            </List>
            <form onSubmit={handleCommentSubmit(index)} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                sx={{margin:'10px'}}
                required
                name="comment"
                label="Add a comment"
                variant="outlined"
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Reply
              </Button>
            </form>
          </div>
        ))
      ) : (
        <Typography variant="body1" align="center" style={{ marginTop: '1rem', color: '#666' }}>
          No discussions available.
        </Typography>
      )}
    </div>
  );
};

export default DiscussionBoard;

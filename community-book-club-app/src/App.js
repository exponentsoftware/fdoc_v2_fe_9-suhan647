import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookClubList from './components/BookClubList';
import RecommendationForm from './components/RecommendationForm';
import DiscussionBoard from './components/DiscussionBoard';
import Navbar from './components/Navbar';
import BookClubDetails from './components/BookClubDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '2rem' }}>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookclubs" element={<BookClubList />} />
          <Route path="/recommendations" element={<RecommendationForm />} />
          <Route path="/discussions" element={<DiscussionBoard />} />
          <Route path="/bookclubs/:id" element={<BookClubDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
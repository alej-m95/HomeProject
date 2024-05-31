import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AddMatchScreen from './screens/AddMatchScreen';
import MatchDetailsScreen from './screens/MatchDetailsScreen';
import MyMatchesScreen from './screens/MyMatchesScreen';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/add-match" element={<AddMatchScreen />} />
      <Route path="/match-details/:id" element={<MatchDetailsScreen />} />
      <Route path="/my-matches" element={<MyMatchesScreen />} />
    </Routes>
  );
};

export default App;

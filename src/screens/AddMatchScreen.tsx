import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMatchScreen: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [level, setLevel] = useState('');
  const [location, setLocation] = useState('');
  const [playType, setPlayType] = useState('');
  const navigate = useNavigate();

  const addMatch = () => {
    // Logic to add the match would go here
    navigate('/');
  };

  return (
    <div>
      <input placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
      <input placeholder="Date and Time" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <input placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} />
      <input placeholder="Home or Away" value={location} onChange={(e) => setLocation(e.target.value)} />
      <input placeholder="Play Type (8v8 or 11v11)" value={playType} onChange={(e) => setPlayType(e.target.value)} />
      <button onClick={addMatch}>Add Match</button>
    </div>
  );
};

export default AddMatchScreen;

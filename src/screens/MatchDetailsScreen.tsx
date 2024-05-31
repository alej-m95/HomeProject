import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Match {
  id: number;
  teamName: string;
  dateTime: string;
  level: string;
  location: string;
  playType: string;
}

const MatchDetailsScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const match: Match = { id: Number(id), teamName: 'Team A', dateTime: '2024-05-24 10:00', level: 'Intermediate', location: 'Home', playType: '11v11' }; // Example match data

  const claimMatch = () => {
    // Logic to claim the match would go here
    navigate('/my-matches');
  };

  return (
    <div>
      <p>{match.teamName}</p>
      <p>{match.dateTime}</p>
      <p>{match.level}</p>
      <p>{match.location}</p>
      <p>{match.playType}</p>
      <button onClick={claimMatch}>Claim Match</button>
    </div>
  );
};

export default MatchDetailsScreen;

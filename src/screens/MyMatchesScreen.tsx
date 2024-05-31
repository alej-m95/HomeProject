import React from 'react';

interface Match {
  id: number;
  teamName: string;
  dateTime: string;
}

const MyMatchesScreen: React.FC = () => {
  const claimedMatches: Match[] = [
    { id: 1, teamName: 'Team A', dateTime: '2024-05-24 10:00' },
    { id: 2, teamName: 'Team B', dateTime: '2024-05-25 15:00' }
  ]; // Example claimed matches data

  return (
    <div>
      {claimedMatches.length > 0 ? (
        <ul>
          {claimedMatches.map((match) => (
            <li key={match.id}>
              <p>{match.teamName}</p>
              <p>{match.dateTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No claimed matches</p>
      )}
    </div>
  );
};

export default MyMatchesScreen;

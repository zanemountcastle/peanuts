import React from 'react';
import ScoreInput from './ScoreInput.js';
import ScoresList from './ScoresList.js';
import GameStarter from './GameStarter.js';

// Renders score input and scores list if a game is in progress, otherwise it
// asks for the user to start a game with a unique game ID.
const renderContent = hasUserId => {
  if (hasGameId) {
    return (
      <div>
        <ScoreInput />
        <ScoresList />
      </div>
    );
  } else {
    return (
      <div>
        <GameStarter />
      </div>
    )
  }
}

const AppContent = ({ hasGameId }) => (

);

AppContent.propTypes = {
  hasGameId: React.PropTypes.object,
};

export default AppContent;

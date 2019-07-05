import React from 'react';

const Header = ({ restartGame }) => (
    <div className="grid-header-container">
        <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
);

export default Header;
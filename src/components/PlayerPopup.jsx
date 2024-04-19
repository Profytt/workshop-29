import React from 'react';

const PlayerDetailsPopup = ({ player, onClose }) => { 
  return (
    <div className="popup-overlay"> 
      <div className="popup-content">
        <h2>Player Details</h2>
        <p><strong>Id:</strong> {player.id}</p>
        <p><strong>Name:</strong> {player.name}</p>
        <p><strong>Breed:</strong> {player.breed}</p>
        <p><strong>Status:</strong> {player.status}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PlayerDetailsPopup;
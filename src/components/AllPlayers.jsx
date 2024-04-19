import React, { useState, useEffect } from "react";
import fetchPlayers from "../API/index.js";
import PlayerCard from "./PlayerCard";
import deletePlayer from "../API/deletePlayer.js";
import PlayerDetailsPopup from "./PlayerPopup.jsx";
import addNewPlayer from "../API/AddNewPlayer.jsx";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const refetchPlayers = async () => {
    try {
        const data = await fetchPlayers();
        setPlayers(data.data.players);
    } catch (error) {
        setError(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data.data.players);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  
  
  const handleDelete = async (playerId) => {
    
    try {
      await deletePlayer(playerId);

      setPlayers(players.filter((player) => player.id !== playerId));
    } catch (error) {
      setError(error);
    }
  };

  const handleDetails = (playerId) => {
    const player = players.find((player) => player.id === playerId);
    setSelectedPlayer(player);
    setShowDetailsPopup(true);
  };

  

  return (
    <div>
      <h1 className="text-3xl">All Players</h1>
      {error && <div>Error: {error.message}</div>} {/* Error handling */}
      {players && ( // Render only if players exists
        <div className="player-list">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onDelete={handleDelete} // Implement this
              onDetails={handleDetails} // Implement this
            />
          ))}
        </div>
      )}
      <div>
        {showDetailsPopup && selectedPlayer && (
          <PlayerDetailsPopup
            player={selectedPlayer}
            onClose={() => setShowDetailsPopup(false)}
          />
        )}
      </div>
    </div>
  );
}

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
        setError(error)
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
    <div className="playerContainer">
      <h1>All Players</h1>
      {error && <div>Error: {error.message}</div>} 
      {players && ( 
        <div className="player-list">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onDelete={handleDelete} 
              onDetails={handleDetails} 
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
      <footer className="footer"></footer>
    </div>
  );
}

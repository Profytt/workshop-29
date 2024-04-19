import React from "react";

export default function PlayerCard({ player, onDelete, onDetails}) {
    const handeDeleteClick = () => {
        onDelete(player.id);
    };

    const handleDetailsClick = () => {
        onDetails(player.id);
    };

    const PlayerCard= ({ player }) => {
        
    }



    return (
        <div className="card" data-id={player.id}>
            <div className="card-header card-image">
                <h3>{player.name}</h3>
                <img className="image" src={player.imageUrl} alt={player.name} />
            </div>
            <div className="card-footer">
                <button className="btn" onClick={handleDetailsClick}>Details</button>
                <button className="btn" onClick={handeDeleteClick}>Delete</button>
            </div>
        </div>
    );
}
const deletePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-PT/players${playerId}`, {
        method: 'DELETE' 
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete player');
      }
  
      // You might get a success response from the API 
    } catch (error) {
      console.error('Error deleting player:', error);
      // Handle the error appropriately 
    }
  };

  export default deletePlayer;
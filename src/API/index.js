const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-PT/players";

const fetchPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        if(!response.ok) {
            throw new Error('Something went wrong fetching players...');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching players:', error);
        throw error;
        
    }

    
};

const addNewPlayer = async (newPlayerData) => {
    try {
        const response = await fetch(APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlayerData)
        });

        if (!response.ok) {
            throw new Error('Could not add new player');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding player:', error);
        throw error;
    }
};

export default fetchPlayers;
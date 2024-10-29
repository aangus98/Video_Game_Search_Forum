import { useState } from "react";
import axios from "axios";

const AddRecommendation = () => {
    const [searchedGame, setSearchedGame] = useState('');
    const [recommendedGame, setRecommendedGame] = useState('');
    const [message, setMessage] = useState('');
    const api_id = JSON.parse(sessionStorage.getItem('searchedGameData')).id;
    const title = JSON.parse(sessionStorage.getItem('searchedGameData')).name;
    const token = localStorage.getItem('token');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://video-game-search-forum.onrender.com/api/search', {
                query: searchedGame,
            });
            setRecommendedGame(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Game not found. Try another one?');
            setRecommendedGame(null);
        }
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!recommendedGame) {
                setMessage('Please search for a game to recommend');
                return;
            }

            await axios.post('https://video-game-search-forum.onrender.com/api/recommendations',
                {api_id, title, recommended_game_api_id: recommendedGame.id, recommended_game_title: recommendedGame.name},
                {headers: {Authorization: `Bearer ${token}`}}
            );
            setMessage('Recommendation added successfully!');
            setSearchedGame('');
            setRecommendedGame(null);
        } catch (error) {
            setMessage('Failed to add recommendation. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <h2>Recommend A Similar Game!</h2>
            <input
            type="text"
            placeholder="Enter a game"
            value={searchedGame}
            onChange={(e) => setSearchedGame(e.target.value)}
            required
            />
            <button type="submit">Search</button>
            {recommendedGame && (
                <div style={{marginTop: '20px'}}>
                    <h3>Chosen Game:</h3>
                    <p>{recommendedGame.name}</p>
                    <button onClick={handleSubmit}>
                        Add Recommendation
                    </button>
                </div>
            )}
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddRecommendation;
import { useState } from "react";
import axios from "axios";

const AddCompletionTime = () => {
    const [completionTime, setCompletionTime] = useState('');
    const [message, setMessage] = useState('');
    const api_id = JSON.parse(sessionStorage.getItem('searchedGameData')).id;
    const title = JSON.parse(sessionStorage.getItem('searchedGameData')).name;
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
        if (!timeRegex.test(completionTime)) {
            setMessage('Invalid Time Format. Please Use "HH:MM:SS"');
            return;
        }
        try {
            await axios.post('https://video-game-search-forum.onrender.com/api/completiontimes',
                {api_id, title, completion_time: completionTime},
                {headers: {Authorization: `Bearer ${token}`}}
            );
            setMessage('Completion time added successfully! (WOW, so fast!)');
            setCompletionTime('');
        } catch (error) {
            setMessage('Failed to add time. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Completion Time!</h2>
            <input
            type="text"
            placeholder="HH:MM:SS"
            value={completionTime}
            onChange={(e) => setCompletionTime(e.target.value)}
            required
            />
            <button type="submit">Submit Time</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddCompletionTime;
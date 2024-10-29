import { useState } from "react";
import axios from "axios";

const AddReview = () => {
    const [content, setContent] = useState('');
    const [score, setScore] = useState('');
    const [message, setMessage] = useState('');
    const api_id = JSON.parse(sessionStorage.getItem('searchedGameData')).id;
    const title = JSON.parse(sessionStorage.getItem('searchedGameData')).name;
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://video-game-search-forum.onrender.com/api/reviews',
                {title, content, score, api_id},
                {headers: {Authorization: `Bearer ${token}`}}
            );
            setMessage('Review added successfully!');
            setContent('');
            setScore('');
        } catch (error) {
            setMessage('Failed to add review. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Review!</h2>
            <textarea
            placeholder="Share your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            />
            <input
            type="number"
            min={1}
            max={10}
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
            />
            <button type="submit">Submit Review</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default AddReview;
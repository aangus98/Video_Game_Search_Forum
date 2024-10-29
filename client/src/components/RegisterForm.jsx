import { useState} from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://video-game-search-forum.onrender.com/api/users', {
                username,
                password,
            });
            setMessage(response.data.message || 'Registration Successful!');
        } catch (error) {
            setMessage(error.response.data.message || 'Registration failed.');
        }
    };

    return(
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type= "submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RegisterForm;
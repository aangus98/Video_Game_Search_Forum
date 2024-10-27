import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import { pool, connectToDatabase } from './config/connection.js'; // Import the connection pool

await connectToDatabase(); // Connect to the database

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

// Define the Game interface
interface Game {
  aggregated_rating: number;
  involved_companies: { company: { name: string } }[];
  first_release_date: number;
  genres: { name: string }[];
  cover: { image_id: string };
  [key: string]: any;
}

// Connect to the database
pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });

console.log(pool);

// Define the search endpoint
app.post('/api/search', async (req, res) => {
  const {query} = req.body;
  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `fields name, cover.image_id, aggregated_rating, first_release_date, genres.name, involved_companies.company.name ; search "${query}"; limit 1;`,
      {
        headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.API_CLIENT_ID,
          'Authorization': process.env.API_AUTH_TOKEN,
        }
      }
    );

// Map the response data to the desired format    
const gameData = (response.data as Game[]).map(({aggregated_rating, involved_companies, first_release_date, genres, cover, ...rest }) => ({
  ...rest,
  cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`,
  critic_score: Math.round(aggregated_rating),
  genres: genres.map(genreObj => genreObj.name),
  developers: involved_companies.map(companyObj => companyObj.company.name),
  release_date: first_release_date ? new Date(first_release_date * 1000).toLocaleDateString() : "Unknown",
}));

    res.json(gameData);
  } catch (error) {
    console.error('Something went horribly wrong!!!!:', error);
    res.status(500).json({message: 'Big Ole Server Error'});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
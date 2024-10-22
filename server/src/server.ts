// import sequelize from './config/connection.js';
// import userRoutes from './routes/userRoutes.js';
import express from 'express';
<<<<<<< HEAD:server/src/server.ts
import sequelize from './config/connection.js';
<<<<<<< HEAD:server/src/server.ts
import { userRoutes } from './routes/api/userRoutes.js';
=======
import userRoutes from './routes/userRoutes.js';
=======
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

dotenv.config();
>>>>>>> 71bb1dafe9e1374b08ddec82989086f487825a9a:src/server.ts

>>>>>>> 9f0edd42a1273293573e2f67b366a84dc9c23cf2:src/server.ts
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());
<<<<<<< HEAD:server/src/server.ts
app.use(userRoutes);
=======
>>>>>>> 71bb1dafe9e1374b08ddec82989086f487825a9a:src/server.ts

app.post('/api/search', async (req, res) => {
  const {query} = req.body;
  try {
    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `fields name; search "${query}";`,
      {
        headers: {
          'Accept': 'application/json',
          'Client-ID': process.env.API_CLIENT_ID,
          'Authorization': process.env.API_AUTH_TOKEN,
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Something went horribly wrong!!!!:', error);
    res.status(500).json({message: 'Big Ole Server Error'});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.use(express.static('../client/dist'));
// app.use(express.json());
// app.use(routes);

// //Register API routes
// app.use('/api', userRoutes); //Add user routes

// // Connect to the database before starting the Express.js server
// sequelize.sync()
//   .then(() => {
//     console.log('Connected to database successfully.');
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port ${PORT}`);
//     });
//   })
//   .catch((err: Error) => {
//     console.error('Failed to sync database:', err);
//     process.exit(1);
//   });
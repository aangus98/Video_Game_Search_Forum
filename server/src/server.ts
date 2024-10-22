import express from 'express';
import sequelize from './config/connection.js';
<<<<<<< HEAD:server/src/server.ts
import { userRoutes } from './routes/api/userRoutes.js';
=======
import userRoutes from './routes/userRoutes.js';

>>>>>>> 9f0edd42a1273293573e2f67b366a84dc9c23cf2:src/server.ts
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('../client/dist'));
app.use(express.json());
app.use(userRoutes);

//Register API routes
app.use('/api', userRoutes); //Add user routes

// Connect to the database before starting the Express.js server
sequelize.sync()
  .then(() => {
    console.log('Connected to database successfully.');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error('Failed to sync database:', err);
    process.exit(1);
  });
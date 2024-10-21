import express from 'express';
import sequelize from './config/connection.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);

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
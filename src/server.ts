import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
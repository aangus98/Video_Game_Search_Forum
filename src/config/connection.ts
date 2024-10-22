// Enable access to .env variables
import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 30000,
    },
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

    sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
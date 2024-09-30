import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a Sequelize instance for the database connection
const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: Number(process.env.DB_PORT), // Ensure port is a number
  logging: false // Disable logging if you don't want to see SQL queries in the console
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the MySQL database using Sequelize...');
  })
  .catch((error: Error) => { // Explicit type declaration for error
    console.error('Unable to connect to the MySQL database:', error.message);
  });

export default sequelize;

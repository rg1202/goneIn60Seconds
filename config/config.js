require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT || 'mysql',
    // Add additional configuration here as needed
  },
  test: {
    // Configuration for test environment
  },
  production: {
    // Configuration for production environment
  }
};
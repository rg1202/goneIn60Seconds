require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // Include other development-specific settings here
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
    // You can add additional production-specific configuration here
  }
};
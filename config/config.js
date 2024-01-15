require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
    // additional development-specific configurations
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
    // additional production-specific configurations
    // you can omit port here because it's included in the JAWSDB_URL
  }
};
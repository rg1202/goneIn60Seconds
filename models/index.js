const Sequelize = require('sequelize');

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql' // or another dialect
    }
);

const db = {};

// Assign Sequelize and sequelize (the instance) to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and associate them with the Sequelize instance
db.User = require('./user')(sequelize, Sequelize);
db.Message = require('./message')(sequelize, Sequelize); // Assuming you have a 'message.js'

// Set up associations
db.User.hasMany(db.Message, { foreignKey: 'senderId', as: 'SentMessages' });
db.Message.belongsTo(db.User, { foreignKey: 'senderId', as: 'Sender' });

db.User.hasMany(db.Message, { foreignKey: 'receiverId', as: 'ReceivedMessages' });
db.Message.belongsTo(db.User, { foreignKey: 'receiverId', as: 'Receiver' });

module.exports = db;
const Sequelize = require('sequelize');
let sequelize;

if (process.env.JAWSDB_URL) {
	// Production environment (Heroku)
	sequelize = new Sequelize(process.env.JAWSDB_URL, {
		dialect: "mysql",
	});
} else {
	// Development environment
	sequelize = new Sequelize(
		process.env.DB_DATABASE,
		process.env.DB_USERNAME,
		process.env.DB_PASSWORD,
		{
			host: process.env.DB_HOST,
			dialect: "mysql",
			port: process.env.DB_PORT || 3306,
		}
	);
}

const db = {};

// Assign Sequelize and sequelize (the instance) to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and associate them with the Sequelize instance
db.User = require("./User")(sequelize, Sequelize);
db.Message = require("./message")(sequelize, Sequelize); //

// Set up associations
db.User.hasMany(db.Message, { foreignKey: "senderId", as: "SentMessages" });
db.Message.belongsTo(db.User, { foreignKey: "senderId", as: "Sender" });

db.User.hasMany(db.Message, {
	foreignKey: "receiverId",
	as: "ReceivedMessages",
});
db.Message.belongsTo(db.User, { foreignKey: "receiverId", as: "Receiver" });

module.exports = db;

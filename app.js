require('dotenv').config();  // Import and configure dotenv at the top

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const db = require('./models');


const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Registration route
app.post('/register', async (req, res) => {
    try {
        // Extract user details from request body
        const { name, age, location, email, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const newUser = await db.User.create({
            name,
            age,
            location,
            email,
            password: hashedPassword
        });


        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch(err) {
        // handle errors
        console.error('Error while registering user', err);
        res.status(500).json({ message: 'Error while registering user' });
    }
});

// Initialize Sequelize using environment variables from .env file
const Sequelize = require('sequelize');
// Now process.env.DB_DATABASE, etc., should be available
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql' // or your specific dialect
    }
);
    
// test the database connection
async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDatabaseConnection();

// add a basic route
app.get('/ping', function(req, res){
    res.json({'status': 'success', 'message': 'pong'});
});

db.sequelize.sync().then(() => {
    // Start your server here
    app.listen(port, () => console.log(`Server running on port ${port}`));
});
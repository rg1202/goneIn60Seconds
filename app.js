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
    
db.sequelize.sync().then(() => {
    // Start server here
    app.listen(port, () => console.log(`Server running on port ${port}`));
});
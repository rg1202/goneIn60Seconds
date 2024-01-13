// testuser.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../models'); // Adjust the path as necessary

async function createTestUser() {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10); // Hashing the password

        const newUser = await db.User.create({
            name: "Test User4",
            location: "Saint Louis, Missouri",
            age: 50,
            email: "testuser4@example.com",
            password: hashedPassword
        });

        console.log('New User Created:', newUser.get({ plain: true }));
    } catch (error) {
        console.error('Error creating a new user:', error);
    }
}

createTestUser();
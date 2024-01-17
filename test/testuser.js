// testuser.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const db = require('../models'); 

async function createTestUser() {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10); // Hashing the password

        const newUser = await db.User.create({
            name: "Test User5",
            location: "Oakland, California",
            age: 34,
            email: "testuser5@example.com",
            password: hashedPassword
        });

        console.log('New User Created:', newUser.get({ plain: true }));
    } catch (error) {
        console.error('Error creating a new user:', error);
    }
}

createTestUser();
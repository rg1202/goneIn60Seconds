// testModels.js
require('dotenv').config();

const db = require('../models'); // Adjusted path

// Code to create a new user
db.User.create({
    name: "Test User3",
    location: "Saint Louis, Missouri",
    age: 42,
    email: "testuser3@example.com",
    password: "password123" // Assuming this is hashed in the actual implementation
})
.then(newUser => {
    console.log('New User Created:', newUser);
})
.catch(error => {
    console.error('Error creating a new user:', error);
});

// Run this file with Node.js
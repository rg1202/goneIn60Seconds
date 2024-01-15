// registerController.js

const db = require('../models'); // Adjust path as needed
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    try {
        const { name, email, location, age, password } = req.body;

        // Check if user already exists
        const existingUser = await db.User.findOne({ where: { email: email } });
        if (existingUser) {
            // Handle the case where user already exists
            // For example, send back a message or redirect to a 'user exists' page
            return res.status(409).send('User already exists with this email');
        }

        // Continue with registration if user does not exist
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.User.create({
            name,
            email,
            location,
            age,
            password: hashedPassword
        });

        req.session.userId = newUser.id;
        res.redirect('/profile');
    } catch (error) {
        console.error('Error during registration', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    registerUser
};
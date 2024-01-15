// registerController.js
const bcrypt = require('bcrypt');
const db = require('../models'); // Adjust the path as needed

const handleRegistration = async (req, res) => {
    try {
        const { name, age, location, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.User.create({
            name,
            age,
            location,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error while registering user', err);
        res.status(500).json({ message: 'Error while registering user' });
    }
};

module.exports = {
    handleRegistration
};
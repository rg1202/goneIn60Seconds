const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models'); // Adjust the path to your models directory as needed
const router = express.Router();
const registerController = require('../controllers/registerController');

// Registration route
router.post('/register', registerController.handleRegistration);

module.exports = router;

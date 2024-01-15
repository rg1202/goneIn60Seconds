const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Landing page route
router.get('/', homeController.renderLandingPage);

// Login route
router.post('/login', homeController.handleLogin);

// Logout route
router.post('/', homeController.handleLogout);

module.exports = router;
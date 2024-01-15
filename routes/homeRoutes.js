const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Landing page route
router.get('/landing', homeController.renderLandingPage);

// Login route
router.post('/login', homeController.handleLogin);

// Logout route
router.post('/logout', homeController.handleLogout);

module.exports = router;
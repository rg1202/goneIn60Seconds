const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const requireAuth = require('../middleware/authMiddleware');

// Profile page route
router.get('/profile', requireAuth, profileController.getProfile);

// Profile update route
router.post('/profile/update', requireAuth, profileController.updateProfile);

module.exports = router;

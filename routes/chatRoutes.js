// chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Define routes here
router.get('/', chatController.getChat);

module.exports = router;
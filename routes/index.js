// routes/index.js
const express = require('express');
const router = express.Router();

const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
const homeRoutes = require('./homeRoutes');
const chatRoutes = require('./chatRoutes');
const profileRoutes = require('./profileRoutes');
const registerRoutes = require('./registerRoutes');

// Use the imported routes
//router.use('/api', apiRoutes);
router.use('/', authRoutes);
router.use('/', homeRoutes);
router.use('/chat', chatRoutes);
router.use('/', profileRoutes);
router.use('/', registerRoutes);

// Export the base router
module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../models'); // Adjust the path to your models
const requireAuth = require('../middleware/authMiddleware'); // Adjust path as needed

// Chat route
router.get("/chat", requireAuth, async (req, res) => {
    const userId = req.session.userId;
    const user = await db.User.findByPk(userId);
    if (user) {
        res.render("chat", { name: user.name });
    } else {
        res.status(404).send("User not found");
    }
});

// Other routes...

module.exports = router;
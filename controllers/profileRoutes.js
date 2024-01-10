const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    const userData = await User.findAll({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post
            },
            {
                model: Comment
            }
        ],
    });
    const targetUser = userData.map((user) => user.get({ plain: true }));
    const user = targetUser[0];
    res.render('profilePage', { user });
}),

module.exports = router;
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log(req.session.user_id);
    res.redirect('/profile/' + req.session.user_id);
});

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
    
    const logged_in = req.session.logged_in
    const targetUser = userData.map((user) => user.get({ plain: true }));
    const user = targetUser[0];
    res.render('profilePage', { user, logged_in });
}),

module.exports = router;
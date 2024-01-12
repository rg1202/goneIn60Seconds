const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
      {
        model: Comment,
        attributes: ['comment_body', 'user_id'],
        order: [
          ['id', 'DESC']
        ],
      }
    ],
    order: [
      ['id', 'DESC']
    ],
  });
  const loggedUser = req.session.user_id
  const posts = postData.map((post) => post.get({ plain: true }));
  const logged_in = req.session.logged_in
  res.render('homepage', { posts, logged_in, loggedUser });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

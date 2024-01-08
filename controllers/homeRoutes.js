const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

console.log(User, Post, Comment)

router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const commentData = await Comment.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  const comments = commentData.map((comment) => comment.get({ plain: true }));
  res.render('homepage', { posts, comments });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;

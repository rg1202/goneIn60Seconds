const router = require('express').Router();
const { Post } = require('../../models');

router.post('/newPost', async (req, res) => {
    const post_title = req.body.post_title;
    const post_body = req.body.post_body;
    const user_id = req.session.user_id;

    try {
        const newPost = await Post.create({
            post_title,
            post_body,
            user_id
        })

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
}),

module.exports = router;
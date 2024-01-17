const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/newComment', async (req, res) => {
    const comment_body = req.body.comment_body;
    const user_id = req.session.user_id;
    const post_id = req.body.post_id;

    try {
        const newPost = await Comment.create({
            comment_body,
            user_id,
            post_id,
        })

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
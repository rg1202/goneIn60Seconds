const { Post } = require('../models');

const postData = [
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 4
    },
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 2
    },
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 1
    },
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 5
    },
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 3
    },
    {
        post_title: "loreum ipsum",
        post_body: "loreum ipsum dolor sit amet",
        user_id: 1
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
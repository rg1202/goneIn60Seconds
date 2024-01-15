const db = require('../models'); // Adjust path as needed

const getProfile = async (req, res) => {
    try {
        const userId = req.session.userId;
        const user = await db.User.findByPk(userId);

        if (user) {
            res.render('profile', user.dataValues);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error fetching user data', error);
        res.status(500).send('Internal Server Error');
    }
};

const updateProfile = async (req, res) => {
    try {
        const userId = req.session.userId;
        const { name, email, age, location } = req.body;

        const [updateCount] = await db.User.update(
            { name, email, age, location },
            { where: { id: userId } }
        );

        if (updateCount === 0) {
            res.status(404).json({ success: false, message: 'User not found' });
        } else {
            res.json({ success: true, name, email, location, age });
        }
    } catch (error) {
        console.error('Error while updating profile', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    getProfile,
    updateProfile
};
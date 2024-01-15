const bcrypt = require('bcrypt');
const db = require('../models'); // Adjust the path as needed to your models directory

const homeController = {
    renderLandingPage: (req, res) => {
        res.render('landing');
    },
    handleLogin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await db.User.findOne({ where: { email } });

            if (user && await bcrypt.compare(password, user.password)) {
                req.session.regenerate(err => {
                    if (err) {
                        throw err;
                    }
                    req.session.userId = user.id;
                    res.redirect('/profile');
                });
            } else {
                res.status(401).send('Invalid credentials');
            }
        } catch (error) {
            console.error('Login error', error);
            res.status(500).send('Internal Server Error');
        }
    },
    handleLogout: (req, res) => {
        req.session.destroy(err => {
            if (err) {
                res.status(500).send('Could not log out, please try again');
            } else {
                res.send('Logged out successfully');
            }
        });
    }
};

module.exports = homeController;

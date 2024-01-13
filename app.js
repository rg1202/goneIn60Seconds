require('dotenv').config();  // Import and configure dotenv at the top

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const db = require('./models');
const session = require('express-session');

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const app = express();
const port = process.env.PORT || 3002;

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up the public directory
app.use(express.static('public'));

// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, // Prevents client side JS from reading the cookie to prevent attacks 
        secure: false,
        maxAge: 24 * 60 * 60 * 1000 // 24 hour expiration
    }   
}));

// landing page
app.get('/', (req, res) => {
    res.render('index');
});

// profile page
pp.get('/profile', requireAuth, async (req, res) => {
    try {
        const userId = req.session.userId;
        const user = await db.User.findByPk(userId);

        if (user) {
            const userData = {
                name: user.name,
                email: user.email,
                age: user.age,
                location: user.location
                // ...other user data you to display
            };

            // Render the profile page with user data
            res.render('profile', { userData });
        } else {
            // Handle the case where the user is not found
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error('Error fetching user data', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/profile/update', requireAuth, async (req, res) => {
    try {
        const userId = req.session.userId;
        const [updateCount] = await db.User.update(
            { name, email, age, location },
            { where: { id: userId } }
        );

        if (updateCount === 0) {
            // No rows were updated, which means the user was not found
            res.status(404).send('User not found');
        } else {
            // Successful update
            res.send('Profile updated successfully');
        }
    } catch (error) {
        console.error('Error while updating profile', error);
        res.status(500).send('Internal Server Error');
    }
});

// Login Routes
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        //Log received credentials
        console.log("Received email:", email);
        console.log("Received password:", password);

        const user = await db.User.findOne({ where: { email } });

        // Log after fetching the user
        if (user) {
            console.log("User found in DB:", user.email);
            const isPasswordValid = await bcrypt.compare(password, user.password);
            console.log("Password valid:", isPasswordValid);  // This will show true or false

            if (!isPasswordValid) {
            return res.status(401).send('Invalid credentials');
    }
        } else {
            console.log("No user found with email:", email);
            return res.status(401).send('Invalid credentials');
        }

        // regen session after login
        req.session.regenerate(err => {
            if (err) {
                console.error('Session regeneration error', err);
                return res.status(500).send('Internal Server Error');
                }

                // Set user info in session
                req.session.userId = user.id;
                res.send('Logged in successfully');
            });
        
    } catch (error) {
        console.error('Login error', error);
        res.status(500).send('Internal Server Error');
    }
});
// Logout route
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out, please try again');
        }
        res.send('Logged out successfully');
    });
});
// Middleware to check if user is logged in
function requireAuth(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).send('You must be logged in');
    }
    next();
}
// Protected route
app.get('/protected-route', requireAuth, (req, res) => {
    res.send('You are viewing a protected route');
});

// Registration route
app.post('/register', async (req, res) => {
    try {
        // Extract user details from request body
        const { name, age, location, email, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        const newUser = await db.User.create({
            name,
            age,
            location,
            email,
            password: hashedPassword
        });


        // Respond with success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch(err) {
        // handle errors
        console.error('Error while registering user', err);
        res.status(500).json({ message: 'Error while registering user' });
    }
});
// sequelize     
db.sequelize.sync().then(() => {
    // Start server here
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

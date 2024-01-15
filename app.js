require("dotenv").config();

const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./routes"); // Ensure this correctly imports all your routes
const chatRoutes = require('./routes/chatRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Apply other middleware
const otherMiddleware = require('./middleware/otherMiddleware');
app.use(otherMiddleware.sessionMiddleware);
app.use(otherMiddleware.bodyParserJson);
app.use(otherMiddleware.bodyParserUrlencoded);
app.use(express.static("public"));

// Use routes
app.use(routes);
app.use('/chat', chatRoutes);
app.use('/auth', authRoutes);

// Socket.io chat controller
const chatController = require('./controllers/chatController');
io.on("connection", (socket) => {
    chatController.onConnection(socket, io);
});

const port = process.env.PORT || 3002;
const db = require("./models"); // Import your database

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log(`Server running on port ${port}`));
});
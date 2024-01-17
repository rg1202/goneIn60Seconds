require("dotenv").config(); // Load environment variables from .env file

const express = require('express'); // Import express
const http = require("http"); // Import http
const socketIo = require("socket.io"); // Import socket.io
const routes = require("./routes"); // Import routes
const otherMiddleware = require('./middleware/otherMiddleware');  // Import other middleware
const app = express(); // Create express app
const server = http.createServer(app); // Create server using express app
const io = socketIo(server); // Create socket using server

otherMiddleware.handlebars(app);  // Use handlebars middleware
app.use(otherMiddleware.sessionMiddleware);  // Use session middleware
app.use(otherMiddleware.bodyParserJson); // Use body parser middleware
app.use(otherMiddleware.bodyParserUrlencoded); // Use body parser middleware
app.use(express.static("public")); // Serve static content for the app from the "public" directory in the application directory
app.use(otherMiddleware.sessionMiddleware); // Use session middleware

app.use(routes); // Use routes

const chatController = require('./controllers/chatController'); // Import chat controller
io.on("connection", (socket) => { // Listen for socket.io connections
    chatController.onConnection(socket, io); // Call onConnection() in chat controller
});

const port = process.env.PORT || 3002;  // Set default port to 3002 or use environment port
const db = require("./models"); // Import your database

db.sequelize.sync().then(() => {
    server.listen(port, () => console.log(`Server running on port ${port}`)); // Start server
});
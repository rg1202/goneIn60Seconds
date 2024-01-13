require('dotenv').config();

const db = require('../models'); // Adjust the path as necessary


// Inserting a test message
db.Message.create({
    content: "This is a test message",
    senderId: 1,  // sender's user ID
    receiverId: 2, // receiver's user ID
})
.then(newMessage => {
    console.log('New Message Created:', newMessage);
})
.catch(error => {
    console.error('Error creating a new message:', error);
});

// Run this file with Node.js
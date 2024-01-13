require('dotenv').config();

const db = require('../models');

// Retrieving the test message
db.Message.findOne({
    where: { id: 1 }, // Adjust the ID as necessary
    include: [{ 
        model: db.User, 
        as: 'Sender' // 'Sender' or 'Receiver' based on what is being tested
    }]
})
.then(message => {
    console.log('Retrieved Message:', message);
    console.log('Receiver Details:', message.Receiver); // 'Sender' or 'Receiver' based on the alias used
})
.catch(error => {
    console.error('Error retrieving message:', error);
});

// Run this file with Node.js
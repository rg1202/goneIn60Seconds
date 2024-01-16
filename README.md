# ChatSideApp Project

## Link to Deployed Application
[https://chatsideapp-9d3adeaf35ef.herokuapp.com/]

## GitHub Repository
[https://github.com/rg1202/goneIn60Seconds/tree/chatsideapp]

## Special Note
Built 100% from scratch.  No starter nor boilerplate code was used.

## Project Overview

ChatSideApp is a web-based chat application. The application facilitates real-time communication between users in different chat rooms, leveraging technologies like Node.js, Express, Socket.IO, Sequelize, and Heroku.

## Requirements

- [x] **Node.js and Express.js**: Used to create a RESTful API.
- [x] **Handlebars.js**: Employed as the template engine.
- [x] **MySQL and Sequelize ORM**: Utilized for the database.
- [x] **GET and POST Routes**: Implemented for retrieving and adding new data.
- [x] **New Library/Package/Technology**: socket.io for real-time communication.
- [x] **MVC Paradigm**: Folder structure follows the MVC paradigm.
- [x] **Authentication**: Implemented with express-session and cookies.
- [x] **Protected API Keys**: Sensitive information secured with environment variables.
- [x] **Heroku Deployment**: Deployed successfully with data.
- [x] **Polished UI**: The user interface is well-designed and polished.
- [x] **Responsive Design**: The app is fully responsive.
- [x] **Interactive**: Accepts and responds to user input.
- [x] **Coding Standards**: Adheres to good-quality coding standards.
- [x] **Professional README**: Includes a unique name, description, and link to the deployed app.

### Key Features

- Real-time chat functionality with Socket.IO.
- Multiple chat rooms for different topics.
- Profile management with user authentication.
- Login and logout functionality with session management.
- Room-based chats for organized conversations.
- User authentication and profile management.
- Real-time typing indicators.
- Persistent message storage using Sequelize ORM and MySQL.
- Deployed on Heroku with JawsDB MySQL integration.
- Responsive design for mobile devices.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL (JawsDB for Heroku)
- **Real-time Engine:** Socket.IO
- **Session Management:** express-session
- **Password Hashing:** bcrypt
- **Template Engine:** Handlebars.js
- **Deployment:** Heroku

## Installation and Setup

### Local Setup

- 1. Clone the repository:
git clone [https://github.com/rg1202/goneIn60Seconds/tree/chatsideapp]

- 2. Install the application dependencies:
npm install

- 3. Set environment variables in `.env` file:
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_DATABASE=your_database_name
DB_HOST=localhost
SESSION_SECRET=your_secret_key

- 4. Run the application:
npm start

### Heroku Deployment

1. Create a Heroku app.
2. Add JawsDB MySQL add-on.
3. Set environment variables in Heroku settings.
4. Deploy using Heroku Git.

## Challenges and Solutions

### Real-Time Chat

- **Challenge:** Implementing real-time messaging.
- **Solution:** Used Socket.IO for bi-directional communication between server and clients.

### MVC Architecture
- **Challenge:** Organizing codebase with MVC architecture.
- **Solution:** Implemented MVC architecture with Handlebars.js as the templating engine.

### User Authentication

- **Challenge:** Secure user authentication and session management.
- **Solution:** Implemented user authentication with hashed passwords using bcrypt and managed sessions with express-session.

### Database Integration

- **Challenge:** Persisting chat messages and user information.
- **Solution:** Integrated Sequelize ORM for MySQL database management.

### Deployment Issues

- **Challenge:** Application errors during Heroku deployment.
- **Solution:** Configured JawsDB for MySQL in Heroku and resolved environment-specific issues.

## Future Enhancements

- Implement private messaging feature.
- Add AI chatbot for automated responses and moderation.
- Add more interactive UI elements.
- Introduce scalability improvements.

## License

This project is licensed under the [MIT License]

## Contributors
Me

## Tests
Screenshot of the tests passed:
![Screenshot of Postman Login](/assets/Login_Success_Postman.png)
![Screenshot of Postman Logout](/assets/Logout_Success_Postman.png)

## Screenshots of the Application
Screenshot of the application: 
![Screenshot of the application](/assets/chatsideapp3.gif)
![Screenshot of the application](/assets/chatsideapp2.png)
![Screenshot of the application](/assets/chatsideapp1.png)
![Screenshot of the application](/assets/chatsideapp4.png)

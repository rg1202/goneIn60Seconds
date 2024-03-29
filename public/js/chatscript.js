const socket = io('http://localhost:3001')
  const messageContainer = document.getElementById('message-container')
  const messageForm = document.getElementById('send-container')
  const messageInput = document.getElementById('message-input')

  const name = prompt('What is your name?')
  appendMessage('You joined')
  socket.emit('new-user', name)

  socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
  }
  
    );

  socket.on('user-connected', name => {
    appendMessage(`${name} connected`)
  }
    
      );

  socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`)
  }

    );

    messageForm.addEventListener('submit', e => {
      e.preventDefault();
      const message = messageInput.value.trim(); // Trim whitespace from the message
    
      if (message) {
        appendMessage(`You: ${message}`);
        socket.emit('send-chat-message', message);
        messageInput.value = '';
      } else {
        alert("Chat message cannot be blank."); // Display an alert if the message is empty
      }
    }
    );
      

  function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
  }

  console.log(app)
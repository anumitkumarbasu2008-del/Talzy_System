// Select elements
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeBtn = document.getElementById('close-btn');
const chatBox = document.getElementById('chat-box');
const userInputField = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Open chatbot
chatIcon.addEventListener('click', () => {
  chatWindow.style.display = 'flex';
  chatIcon.style.display = 'none';
});

// Close chatbot
closeBtn.addEventListener('click', () => {
  chatWindow.style.display = 'none';
  chatIcon.style.display = 'block';
});

// Send user message
function sendMessage() {
  const userInput = userInputField.value.trim();
  if (userInput === "") return;

  // Add user message
  addMessage(userInput, 'user');

  // Generate bot reply
  botReply(userInput);

  userInputField.value = "";
}

// Add message to chat
function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.innerText = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot reply logic (Rule-based)
function botReply(input) {
  let response = "";
  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    response = "Hi there! 👋 How can I help you today?";
  } else if (text.includes("price")) {
    response = "Our product starts at just ₹499. Would you like to know about features?";
  } else if (text.includes("features")) {
    response = "Our product offers great performance, durability, and 24/7 support.";
  } else if (text.includes("bye")) {
    response = "Goodbye! Have a nice day! 😊";
  } else {
    response = "I'm not sure about that. Could you please rephrase?";
  }

  // Show bot response
  setTimeout(() => addMessage(response, 'bot'), 500);
}

// Send on button click
sendBtn.addEventListener('click', sendMessage);

// Send on Enter key
userInputField.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

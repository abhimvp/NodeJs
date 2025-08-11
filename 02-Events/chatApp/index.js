const ChatRoom = require("./chatRoom");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`User ${user} has joined the chat`);
});

chat.on("message", ({ user, message }) => {
  console.log(`User ${user} says: ${message}`);
});

chat.on("leave", (user) => {
  console.log(`User ${user} has left the chat`);
});

// simulating the chat

chat.join("Alice");
chat.join("Bob");
chat.sendMessage("Alice", "Hello, Bob!");
chat.sendMessage("Bob", "Hi Alice, how are you?");
chat.leave("Alice");

// abhis@Tinku MINGW64 ~/Desktop/NodeJs/02-Events/chatApp (main)
// $ node index.js
// User Alice has joined the chat
// User Bob has joined the chat
// User Alice says: Hello, Bob!
// User Bob says: Hi Alice, how are you?
// User Alice has left the chat

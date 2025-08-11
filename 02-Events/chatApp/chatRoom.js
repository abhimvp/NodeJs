const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }

  sendMessage(user, message) {
    if (!this.users.has(user)) {
      throw new Error("User not in chat room");
    }
    this.emit("message", { user, message });
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("leave", user);
    } else {
      console.log(`User ${user} is not in the chat room`);
    }
  }
}

module.exports = ChatRoom; // we need to export the ChatRoom class in ejs


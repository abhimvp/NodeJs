const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("errorOccurred", (error) => {
  console.error(`Error: ${error.message}`);
});

// Emit an error event
eventEmitter.emit("errorOccurred", new Error("Something went wrong!"));

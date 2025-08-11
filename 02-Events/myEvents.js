const EventEmitter = require("events");
// responsible for for adding the events
// create instance from EventEmitter
const eventEmitter = new EventEmitter();

// define an event and attach a listener to it
eventEmitter.on("greet", () => {
  console.log("Hello and welcome to events in NodeJs!");
}); // on is responsible to attach listeners.
// whenever the above event happens, the attached listener will be called.

// emit the event
eventEmitter.emit("greet");

// we can also pass data to our event emitters
eventEmitter.on("greetUser", (name) => {
  console.log(`Hello ${name}, welcome to events in NodeJs!`);
});

// emit the event with data
eventEmitter.emit("greetUser", "Abhishek Reddy Boddu");

// abhis@Tinku MINGW64 ~/Desktop/NodeJs/02-Events (main)
// $ node myEvents.js
// Hello and welcome to events in NodeJs!
// Hello Abhishek Reddy Boddu, welcome to events in NodeJs!

eventEmitter.once("greetOnce", () => {
  console.log("This will only be greeted once.");
});

// emit the event
eventEmitter.emit("greetOnce");
eventEmitter.emit("greetOnce"); // this will not be greeted again.
eventEmitter.emit("greetUser", "Abhishek MVP"); // this will still work as expected

// some more events can be defined and emitted in a similar manner.

const myListener = () => {
  console.log("Test listener!");
};

eventEmitter.on("test", myListener);

// emit the custom event
eventEmitter.emit("test");
// remove the listener
eventEmitter.removeListener("test", myListener);

// emit the custom event
eventEmitter.emit("test"); // this will not trigger the listener

// what are all the listeners, which are listening on this?

console.log(eventEmitter.listeners("test"));
console.log(eventEmitter.listeners("greet")); // multiple listeners can be attached
const fs = require("node:fs");
// Task : Read the contents of notes.txt
console.log("start of script");
// const contents = fs.readFileSync("notes.txt", "utf-8");
const contents = fs.readFile("notes.txt", "utf-8", (err, data) => { // non - blocking - runs in background, requires the call back function
  if (err) {
    console.error(err);
    return;
  }
  console.log("data is \n", data);
});
console.log(contents);

console.log("end of script");

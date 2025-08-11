// import the file system module - how do we do that in NodeJs - using require('module_name')
const fs = require("fs"); // loads the fs module for us & we assign it to a variable fs & the "require" function is only available to us in the node.js env.
// console.log(fs);
// Above fs is an object in which you have functions for appending file , append file sync , access ..etc which helps you to manage files
// now to read a file - we do
const content = fs.readFileSync("01-Modules/notes.md", "utf-8"); // readFileSync is a function which takes 2 arguments - path of the file_name & encoding type
// console.log(content);

// import the file system module - how do we do that in NodeJs - using require('module_name')
// const fs = require("fs");
// loads the fs module for us & we assign it to a variable fs & the "require" function is only available to us in the node.js env.
// console.log(fs);
// Above fs is an object in which you have functions for appending file , append file sync , access ..etc which helps you to manage files
// now to read a file - we do
// const content = fs.readFileSync("01-Modules/notes.md", "utf-8"); // readFileSync is a function which takes 2 arguments - path of the file_name & encoding type
// console.log(content);
const fs = require("node:fs"); // newer version to avoid conflict and telling that it's built-in module of node

const content = fs.readFileSync("README.md", "utf-8");

console.log(content);

fs.writeFileSync("notes.txt", content, "utf-8"); // writeFileSync is a function which takes 2 arguments - path of the file_name & content to write in the file
fs.appendFileSync("notes.txt", "\nNew New content", "utf-8"); // appendFileSync is a function which takes 2 arguments - path of the file_name & content to append in the file
fs.mkdirSync("newDir"); // mkdirSync is a function which takes 1 argument - path of the directory to create
fs.mkdirSync("newDir/subDir", { recursive: true }); // mkdirSync is a function which takes 1 argument - path of the directory to create
fs.rmdirSync("newDir"); // rmdirSync is a function which takes 1 argument - path of the directory to remove

const { Buffer } = require("buffer");

const buff = Buffer.alloc(4); // cleans the memory for us
console.log(buff);
// abhis@Tinku MINGW64 ~/Desktop/NodeJs/02-buffer (main)
// $ node ./buffferBasic.js
// <Buffer 00 00 00 00> - 4bytes
console.log(buff[1]); // 0
const buf = Buffer.from("Hello chai");
console.log(buf); // <Buffer 48 65 6c 6c 6f 20 63 68 61 69>
console.log(buf[0]); // 72 - ASCII value of 'H'

const bufTwo = Buffer.allocUnsafe(10);
console.log(bufTwo); // doesn't clean the memory

//  write and read into buff
const buffer = Buffer.from("chai or code");
console.log(buffer.toString()); // Hello
console.log(buffer.toString('utf-8',0,4));

buffer[0] = 72; // change the first byte
console.log(buffer.toString()); // Hhai or code
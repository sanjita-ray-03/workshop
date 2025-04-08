const fs = require("fs");
const textIn = fs.readFileSync("./data/text-in.txt","utf-8");

fs.writeFileSync("./data/text-out.txt",`This is a new line \n${textIn}\n Created on: ${Date.now()}`);
console.log("File read & write completed!");
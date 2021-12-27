// core module fs: file system
const fs = require("fs");

// Sync part
// 1 step
// console.log("the sync part is starting ");
// // 2 step
// const data = fs.readFileSync("test.txt");
// console.log(data.toString());
// // 3 step
// console.log("the sync part has ended");

// Async part
//1 step
console.log("the async part has started");

//3 step
fs.readFile("test.txt", (err, data) => {
    err ? console.log(err) : console.log(data.toString());
});
// 3 step
console.log("the async part has ended");

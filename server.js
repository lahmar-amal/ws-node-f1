// core module : http
const http = require("http");
const port = 5000;

http.createServer((req, res) => res.end("hello")).listen(port);
console.log(`this server is running on ${port}`);

const http = require('http');

const server = new http.Server(function (req, res) {

}).listen(3000);

setTimeout(() => {
  server.close();
}, 3500);

const timer = setInterval(() => console.log(process.memoryUsage()), 1000);

timer.unref();
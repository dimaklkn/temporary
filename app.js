const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage!");
  } else if (req.url === "/about") {
    res.end("THis page is ABOUT us");
  } else {
    res.end(`
  <h1>Sorry, the page you are looking for is not available<h1>
  `);
  }
});

server.listen(5000);

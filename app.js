const http = require("http");
const fs = require("fs");

require("dotenv").config();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const dir = __dirname;
const filenames = fs.readdirSync(dir);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let files = filenames
    .filter((filename) => !filename.startsWith(".")) // filter out hidden files
    .map((filename) => {
      return `${filename}\n`;
    })
    .join("");

  res.end(files);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

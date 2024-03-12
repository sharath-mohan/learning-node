const http = require("http");
const fs = require("fs");
const PORT = 3000;
function rqListner(req, res) {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      `<body><form action="/message" method="POST"><input placeholder="name" name="message"><button>Submit</button></from></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("messages.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
}
const server = http.createServer(rqListner);
server.listen(PORT);

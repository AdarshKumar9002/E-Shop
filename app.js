const http = require("http");

const PORT = 3000;

const sendResponse= (req, res) => {
    res.write("Hello World");
    res.end();
}

const server = http.createServer(sendResponse);

server.listen(PORT);

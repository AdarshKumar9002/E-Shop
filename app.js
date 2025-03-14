const http = require("http");

const PORT = 3000;

const sendResponse= (req, res) => {
    console.log(req.header);
    res.write("Hello World");
    res.end();
}

const server = http.createServer(sendResponse);

server.listen(PORT);

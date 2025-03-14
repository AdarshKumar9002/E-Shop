const express = require('express');

const app = express();

const PORT = 3000;

const sendResponse= (req, res, next) => {
    res.write("Hello World");
    res.end();
}

app.use(sendResponse);

app.listen(PORT);

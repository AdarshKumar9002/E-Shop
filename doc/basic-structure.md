# Express  

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  

## Simple Node Server Using Express  

It's easier to create a server using Express than with vanilla Node.js.  

### Install and Import the Express Framework  

Since Express is not a built-in module in Node.js, we need to install it first. After installing Express, we need to import it.  

**Install the Express Framework:**  

```sh
npm install express
```

**Import the Express Framework:**  

```javascript
const express = require("express");
```  

### Creating an Express Application  

To use Express, we need to create an instance of it.  

```javascript
const app = express();
```  

### PORT Configuration  

The server is configured to listen on port 3000.  

```javascript
const PORT = 3000;
```  

### Sending a Response  

To send a response, we will use the `app.use()` method. `app.use()` is used to assign middleware (a function that processes requests) to a specific path.  

**Syntax:**  

```javascript
app.use(path, middleware);
```  

Since we haven't assigned any path, this middleware will execute for all incoming requests.  

```javascript
const sendResponse = (req, res, next) => {
  res.write("Hello World");
  res.end();
};
app.use(sendResponse);
``` 

### Listening to the Server  

To start the server, we use the `listen()` method.  

```javascript
app.listen(PORT);
```  

<br>
<br>

---

<br>
<br> 
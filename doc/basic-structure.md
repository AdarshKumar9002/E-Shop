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

## Middleware

Middleware functions in Express.js are functions that have access to the request object (req), the response object (res), and the next function. They are used to process requests, modify responses, or execute additional logic before passing control to the next middleware or route handler.

**Example:**
```javascript 
app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

app.get('/', (req, res) => {
    console.log('Final Route');
    res.send('Hello!');
});

```

<br>
<br>

---

<br>
<br>

## Static Files

To make files like CSS, JavaScript, and images accessible to the client, we serve them as **static files** using Express. This allows the browser to directly access these resources.  

### Setting Up a Static Folder  

Use the `express.static()` middleware to serve static files from a directory (e.g., `public/`):  

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
```  

### Usage Example  

If you have a file at `public/css/style.css`, you can include it in your HTML like this:  

```html
<link rel="stylesheet" href="/css/style.css">
```
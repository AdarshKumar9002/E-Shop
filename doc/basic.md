# Node.js Basics  

## Simple Node Server  
Creating a simple Node.js server that prints "Hello World."  

### Importing the HTTP Module  
To create a server, we need to import the `http` module. This module provides the `createServer` method, which helps in creating a server.  

```javascript
const http = require("http");
```  

### PORT Configuration  
The server is configured to listen on port 3000.  

```javascript
const PORT = 3000;
```  

### Event Listener Function  
The event listener function provides two objects: `request (req)` and `response (res)`.  

- **Request (`req`)**: Contains data sent by the client to the server.  
- **Response (`res`)**: Allows the server to send data back to the client.  

```javascript
const sendResponse = (req, res) => {
    res.write("Hello World");
    res.end();
};
```  

- `sendResponse` is a function that acts as an event listener in the `createServer` method.  
- `res.write("Hello World")`: The `write` method sends a response back to the client. In this case, it sends `"Hello World"`.  
- `res.end()`: Signals that the server has finished sending the response.  

### Creating the Server  
To create a server, we use the `createServer` method, which takes a request listener as an argument.  

```javascript
const server = http.createServer(sendResponse);
```  

- `createServer` returns a server instance.  
- We store the server instance in a variable so we can listen for incoming connections.  

### Listening to the Server  
To make the server accessible, we need to bind it to a port. This allows us to access the server via `http://localhost:3000/`.  

```javascript
server.listen(PORT);
```  

- `listen` starts the server and makes it available on the specified port.  
- `listen` takes a **port number** as an argument.  
<br>
---
<br>


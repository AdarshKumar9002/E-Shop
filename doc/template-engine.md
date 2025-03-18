# Template Engine 

A view engine is a template engine that integrates with a web framework (like Express.js) to generate dynamic HTML content. It processes templates on the server and sends the final HTML to the client.  

## EJS (Embedded JavaScript)   

EJS is a simple templating language that allows embedding JavaScript in HTML. It helps render dynamic content on the server side.  

### Installation  

Install EJS using npm:  
```sh
npm install ejs
```  

### Setup in Express.js  

In `app.js`, configure Express to use EJS:  

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.set('views', 'views'); // Specify the views directory
```  

### Rendering Views  

Use `res.render(view, data)` to render an EJS template:  

```javascript
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome!' });
});
```  

### EJS Syntax  

| Syntax      | Description |
|------------|-------------|
| `<%= %>`   | Outputs escaped HTML (safe for user input) |
| `<%- %>`   | Outputs raw HTML (use with caution) |
| `<% %>`    | Executes JavaScript code without output |

#### Example (`views/index.ejs`)  
```html
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
```

### Partials (Reusable Components)  

Include partials for reusable elements like headers and footers:  

```html
<%- include('partials/header') %>
<h1><%= message %></h1>
<%- include('partials/footer') %>
```

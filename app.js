const express = require('express');

const shopRoutes = require('./routes/shop');
const pageNotFound = require('./controllers/page-not-found');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(shopRoutes);

app.use(pageNotFound);

app.listen(PORT);

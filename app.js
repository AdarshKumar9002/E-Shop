const express = require("express");
const path = require("path");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const pageNotFound = require("./controllers/page-not-found");

const app = express();

const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use('/admin',adminRoutes);

app.use(pageNotFound);

app.listen(PORT);

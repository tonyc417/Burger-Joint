const express = require('express');

const handlebars = require('express-handlebars');

const mysql = require('mysql');

var PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, console.log("Server Started buddy"));
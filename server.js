const express = require('express');
const handlebars = require('express-handlebars');

const mysql = require('mysql');

var PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, console.log("Server Started buddy"));
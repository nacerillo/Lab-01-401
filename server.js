"use strict";

//3rd party package
const express = require("express"); //import / export;
const app = express();
const PORT = process.env.PORT || 3333;
//internal package
const notFoundHandler = require("./handlers/404.js");
const errors = require("./handlers/500.js");
//app.use -> gobal middleware - every request is ran through this middle ware

//these should always go at the bottom of the code
app.use("*", notFoundHandler);
app.use(errors);

app.listen(3333, () => {
  console.log("server 3333 up and running!");
});

"use strict";

//3rd party package
require("dotenv").config();
const express = require("express"); //import / export;
const app = express();
const stamper = require("./middleware/stamper.js");
const PORT = process.env.PORT || 3333;
//internal package
const notFoundHandler = require("./handlers/404.js");
const errors = require("./handlers/500.js");

app.get("/test-route", (req, res) => {
  res.json({ mes: "this worked" });
  //express gives us ability to quickly send a response
});
//app.use -> gobal middleware function- all incoming requests will pope through this
//these should always go at the bottom of the code

app.get("/data", stamper, (req, res) => {
  let output = { time: req.timestamp };
  res.json(output);
});

app.get("purpose-error", (req, res, next) => {
  next("some words");
});
app.use("*", notFoundHandler);
app.use(errors);
// CLIENT -> req -> SERVER -> res -> CLIENT

function start(port) {
  app.listen(port, () => {
    console.log(`server ${port} up and running!`);
  });
}
module.exports = {
  app: app,
  start: start,
};

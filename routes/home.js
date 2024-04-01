const express = require("express");
const route = express.Router();
route.use(express.json());

route.get("/", (req, res) => {
  res.render("index", {
    title: "pug home",
    home: "clearing homework with pug and routes",
  });
});

module.exports = route;

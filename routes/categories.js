const express = require("express");
const route = express.Router();
route.use(express.json());

const categories = [
  {
    id: 1,
    name: "books",
  },
  {
    id: 2,
    name: "games",
  },
  {
    id: 3,
    name: "media",
  },
];

route.get("/", (req, res) => {
  res.send(categories);
});

// create method

route.post("/", (req, res) => {
  if (!req.body.name) {
    res.status(400).send(`"name" is required`);
    return;
  }
  if (req.body.name.length < 3) {
    res.status(400).send(`"name" should be minimum three letters`);
    return;
  }
  const category = {
    id: categories.length + 1,
    name: req.body.name,
  };
  categories.push(category);
  res.status(201).send(category);
});

// read method

route.get("/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) {
    res.status(404).send(`category is not found`);
  }
  res.send(category);
});

// update mathod

route.put("/:id", (req, res) => {
  const category = categories.find((c) => c.id === parseInt(req.params.id));
  if (!category) {
    res.status(404).send(`category is not defined`);
  }

  if (!req.body.name) {
    res.status(400).send(`"name" is required`);
  }
  if (req.body.name.length < 3) {
    res.status(400).send(`"name" should be minimum three letters`);
  }

  category.name = req.body.name;
  res.status(200).send(category);
});

// delete method

route.delete("/:id", (req, res) => {
  const deletingObj = categories.find((c) => c.id === parseInt(req.params.id));
  if (!deletingObj) {
    res.status(404).send("category is not defined");
  }

  const index = categories.indexOf(deletingObj);
  categories.splice(index, 1);
  res.status(201).send(deletingObj);
});

module.exports = route;

const express = require("express");
const categories = require("./routes/categories");
const home = require("./routes/home");
const app = express();
app.use(express.json());
app.set("view engine", "pug");

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`started with ${port} port...`);
});

app.use("/api/categories", categories);
app.use("/", home);

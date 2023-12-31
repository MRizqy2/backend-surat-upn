const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/routes/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

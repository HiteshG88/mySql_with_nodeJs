const express = require("express");
const mySql = require("mysql");

const app = express();

PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const { data } = await axios.get("http://c-api-python:5000");

  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`running in ${port}`);
});

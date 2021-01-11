const axios = require("axios");
const express = require("express");

const port = 3001;

var app = express();

const postEvery2Second = () => setInterval(() => {
  var randomPath = Math.random().toString(36).substring(2, 7);
  axios({
    url: `http://127.0.0.1:3000/${randomPath}`,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, 2000);

postEvery2Second();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

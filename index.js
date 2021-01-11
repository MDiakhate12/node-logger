const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const port = 3000;

var app = express();

// app.use(express.static(path.join(__dirname, "public")));

const accessLogStream = fs.createWriteStream(
  "../logs/node-service/node-service.log",
  { flags: "a" }
);

app.use(express.json());

app.use(morgan("common", { stream: accessLogStream }));


app.get("/*", (req, res) => {
  res.status(200).send(`Hello ${req.url} from server response!`);
});

app.listen(port, () => {
  console.log(`Node service listening at http://localhost:${port}`);
});

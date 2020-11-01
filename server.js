const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes")

const server = express();

server.use(express.static("public"));
server.use(express.static("assets"));
server.use(routes)

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});


server.listen(3333, function () {
  console.log("Server is running!");
});

const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes")

const server = express();

server.use(express.static("public"));
server.use(express.static("assets"));
server.use(routes)

server.set("view engine", "njk");

const folders = ["admin", "views"]
nunjucks.configure(folders, {express: server})

routes.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Server is running!");
});


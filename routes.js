const express = require('express')
const routes = express.Router()

const revenuesData = require("./data");


routes.get("/", function (req, res) {
    return res.render("index", {items: revenuesData});
  });
  
  routes.get("/about", function (req, res) {
    return res.render("about");
  });
  
  routes.get("/revenues", function(req, res){
    return res.render("revenues", {items: revenuesData});
  });
  
  routes.get("/revenues/:index", function (req, res) {
    const revenues = [...revenuesData];
  
    const revenueIndex = req.params.index;
  
    const revenue = revenues[revenueIndex]
  
    return res.render("revenue", {item: revenue});
  });
  
  routes.use(function (req, res) {
    return res.status(404).render("not-found");
  });
  

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes
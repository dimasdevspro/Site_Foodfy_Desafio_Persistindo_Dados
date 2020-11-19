const express = require('express')
const routes = express.Router()
const recipes = require('./app/controllers/recipes')
const chefs = require('./app/controllers/chefs')
//VIEWS

routes.get("/", recipes.home);
routes.get("/admin/views/about", recipes.about)

//ADMIN RECIPES


routes.get("/admin/recipes/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes/recipes", recipes.delete); // Deletar uma receita

//ADMIN CHEFS
 

routes.get("/admin/chefs/chefs", chefs.index); // Mostrar a lista de receitas
routes.get("/admin/chefs/chefs/create", chefs.create); // Mostrar formulário de nova receita
routes.get("/admin/chefs/chefs/:id", chefs.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes/recipes", recipes.delete); // Deletar uma receita

module.exports = routes
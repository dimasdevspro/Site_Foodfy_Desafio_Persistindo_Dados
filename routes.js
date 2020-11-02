const express = require('express')
const routes = express.Router()
const revenues = require('./controller/revenues')

//admin

routes.get("/", revenues.home)
routes.get("/views/about", revenues.about);
// routes.get("/admin/revenues", revenues.revenues);
// routes.get("/admin/revenues/:index", revenues.revenue);

//ADMIN 

routes.get("/admin/revenues", revenues.index); // Mostrar a lista de receitas
routes.get("/admin/revenues/create", revenues.create); // Mostrar formulário de nova receita
// routes.get("/admin/revenues/:id", revenues.show); // Exibir detalhes de uma receita
// routes.get("/admin/revenues/:id/edit", revenues.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/revenues", revenues.post); // Cadastrar nova receita
// routes.put("/admin/revenues", revenues.put); // Editar uma receita
// routes.delete("/admin/revenues", revenues.delete); // Deletar uma receita

 

module.exports = routes
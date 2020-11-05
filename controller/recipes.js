const fs = require('fs');
const data = require("../data.json")
//exportar admin

exports.home = function (req, res) {
    return res.render("home", {items: data.recipes})
}

exports.about = function (req, res) {
    return res.render("about");
  }

  // exports.recipes = function(req, res){
    //   return res.render("recipes", {items: data});
    // }
    
    // exports.recipe = function (req, res) {
    //   const recipes = [...data];
    
    //   const recipeIndex = req.params.index;
    
    //   const recipe = recipes[recipeIndex]
    
    //   return res.render("recipe", {item: recipe});
    // }  


//exportar admin

// exports.create = function(req, res) {
//     return res.render("test")
// }


exports.index = function(req, res) {
    return res.render('recipes', {items: data.recipes})
}

exports.create = function(req, res) {
    return res.render("create")
}

exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields')
    }

    let{image, title, author, ingredients, preparations, informations} = req.body

    let id = 1
    const lastId = data.recipes[data.recipes.length - 1].id

    if(lastId) {
        id = lastId + 1
    }

    data.recipes.push({
        id,
        image,
        title,
        author,  
        ingredients,
        preparations,
        informations,
    })
fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if(err) return res.send("Write file error!")

    return res.redirect('recipes')
})

}

exports.show = function(req, res) {
    const { id } = req.params

    const foundRecipes = data.recipes.find(function(recipes){
        return recipes.id == id
    })

    if(!foundRecipes) return res.send("Recipes not found!")

    const recipe = {
        ...foundRecipes,

    }

    return res.render("show", {recipe})
}

exports.edit = function(req, res) {
    const { id } = req.params

    const foundRecipes = data.recipes.find(function(recipes){
        return recipes.id ==id
    })

    if(!foundRecipes) return res.send("Recipes not found!")

    const recipe = {
        ...foundRecipes,
    }
    
    return res.render("edit", {recipe})
}
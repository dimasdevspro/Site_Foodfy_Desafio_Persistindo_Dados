const { date } = require('../../lib/utils')

const Recipe = require('../models/Recipe')

module.exports = {
    home(req, res){
        Recipe.all(function(recipes){
            return res.render("home", {recipes})
        })
    },
    about(req, res){
        return res.render("about")
    },
    index(req, res){

        Recipe.all(function(recipes){
            return res.render("recipes/recipes", {recipes})
        })  
    },
    create(req, res){
        Recipe.chefsSelectOptions(function(options){
             return res.render("recipes/create", {chefOptions: options} )
            // console.log({chefOptions: options})
        })

       
    },
    post(req, res){
        Recipe.create(req.body, function(recipe){
            return res.redirect(`/admin/recipes/recipes/${recipe.id}`)
        })
    },
    show(req, res){
        Recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send("Recipes not found!")
            
            return res.render("recipes/show", {recipe})
        })      
    },
    edit(req, res){
        Recipe.find(req.params.id, function(recipe){
            if(!recipe) return res.send("Recipes not found!")
            
            Recipe.chefsSelectOptions(function(options){
                return res.render("recipes/edit", {recipe, chefOptions: options})      
    })
    })        
    },
    put(req, res){
        const keys = Object.keys(req.body)
    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields')
    }

    Recipe.update(req.body, function(){
        return res.redirect(`/admin/recipes/recipes/${req.body.id}`)

    })
    },
    delete(req, res){
        Recipe.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes/recipes`)
        })
    },
}

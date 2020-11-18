const { date } = require('../../lib/utils')

const Chef = require('../models/Chef')

module.exports = {
    index(req, res){
        Chef.all(function(chefs){
            return res.render("chefs/chefs", {chefs})
        })  
    },
    create(req, res){
        return res.render("chefs/create")
    },
    post(req, res){
        Chef.create(req.body, function(chef){
            return res.redirect(`/admin/chefs/chefs/${chef.id}`)
        })
    },
    show(req, res){
        Chef.find(req.params.id, function(chef){
            if(!chef) return res.send("Chefs not found!")
            
            return res.render("chefs/show", {chef})
        })      
    },
    edit(req, res){
        Chef.find(req.params.id, function(chef){
            if(!chef) return res.send("Chefs not found!")
            
            return res.render("chefs/edit", {chef})
        })      
    },
    put(req, res){
        const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields')
    }

    Chef.update(req.body, function(){
        return res.redirect(`/admin/chefs/chefs/${req.body.id}`)
    })
    },
    delete(req, res){
        Chef.delete(req.body.id, function(){
            return res.redirect(`/admin/chefs/chefs`)
        })
    },
}

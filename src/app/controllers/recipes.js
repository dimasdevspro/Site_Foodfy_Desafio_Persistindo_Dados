const db = require('../../config/db')
const { date } = require('../../lib/utils')


module.exports = {
    home(req, res){
        return res.render("home", {items: db.recipes})
    },
    about(req, res){
        return res.render("about")
    },
    index(req, res){
        return res.render("recipes")
    },
    create(req, res){
        return res.render("create")
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "")
            return res.send('Please, fill all fields')
        }
    const query = `
        INSERT INTO recipes {
            chef_id,
            image,
            title,
            ingredients,
            preparation,
            information,
            created_at
        } VALUES { $1, $2, $3, ARRAY[$4], ARRAY[$5], $6, $7}
        RETURNING id
    `
    const values = [
        req.body.chef_id,
        req.body.image,
        req.body.title,
        req.body.ingredients,
        req.body.preparation,
        req.body.information,
        date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
        console.log(err)
        console.log(results)
        return
    })

    },
    show(req, res){
        return res.render("show")
    },
    edit(req, res){
        return res.render("edit")
    },
    put(req, res){
        const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "")
        return res.send('Please, fill all fields')
    }
    },
    delete(req, res){
        return res.render("delete")
    },

}

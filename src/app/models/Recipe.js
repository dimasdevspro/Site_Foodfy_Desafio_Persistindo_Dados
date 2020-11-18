const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    all(callback) {
        db.query(`SELECT * 
        FROM recipes
        ORDER BY title ASC`, function(err, results){
            if(err)  throw `Database Error! ${err}`
            
            callback(results.rows)
        })

    },
    create(data, callback) {

        const keys = Object.keys(data)

        for(key of keys) {
            if(data[key] == "")
            return res.send('Please, fill all fields')
        }
    const query = `
        INSERT INTO recipes (
            chef_id,
            image,
            title,
            ingredients,
            preparations,
            informations,
            created_at
        ) VALUES ( $1, $2, $3, $4, $5, $6, $7)
        RETURNING id
    `
    const values = [
        data.chef_id,
        data.image,
        data.title,
        data.ingredients,
        data.preparations,
        data.informations,
        date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
        if(err) throw `Database Error! ${err}`

         callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM recipes WHERE id = $1`, [id], function(err, results){
            if(err)  throw `Database Error! ${err}`
            callback(results.rows[0])
        })
    },
    update(data, callback) {
        const query = `
    UPDATE recipes SET
        chef_id=($1),
        image=($2),
        title=($3),
        ingredients[:]=ARRAY[$4],
        preparations[:]=ARRAY[$5],
        informations=($6)
    WHERE id= $7
        `

        const values = [
            data.chef_id,
            data.image,
            data.title,
            data.ingredients,
            data.preparations,
            data.informations,
            data.id
        ]

        db.query(query, values, function(err, results){
            if(err)  throw `Database Error! ${err}`

            callback()
        })
    },
    delete(id, callback) {
        db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err, results){
            if(err)  throw `Database Error! ${err}`

            return callback()
        })
    },
    chefsSelectOptions(callback) {
        db.query(`SELECT name, id FROM chefs`, function(err, results){
            if (err) throw 'Database Error!'

            callback(results.rows)
        })
    },
    paginate(params) {
        const { filter, limit, offset, callback } = params

        let query = "",
        filterQuery = "",
        totalQuery = `(
            SELECT count(*) FROM recipes
        ) AS total`


        if (filter ){

            filterQuery = `
            WHERE recipes.name ILIKE '%${filter}%'
            OR recipes.email ILIKE '%${filter}%'
            `

            totalQuery = `(
                SELECT count(*) FROM recipes
                ${filterQuery}
            ) AS total`
        }

        query =`
        SELECT recipes.*, ${totalQuery} 
        FROM recipes
        ${filterQuery}
        LIMIT $1 OFFSET $2
        `

        db.query(query, [limit, offset], function(err, results){
            if (err) throw `Database Error! ${err}` 
            callback(results.rows)
        })
    }
}
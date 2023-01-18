const db = require('../db/db')

const Comment = {

    create: (recipe_id, username, rating, comment) => {
        const sql = `
        INSERT INTO users(recipe_id, username, rating, comment)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `

        return db
            .query(sql, [recipe_id, username, rating, comment])
            .then(dbRes => dbRes.rows[0].username)
    },

    findByUsername: username => {
        const sql = 'SELECT * FROM users WHERE username = $1'

        return db
            .query(sql, [username])
            .then(dbRes => dbRes.rows[0])
    },

    findByRecipeId: id => {
        const sql = 'SELECT * FROM users WHERE recipe_id = $1'

        return db
            .query(sql, [id])
            .then(dbRes => {
                if (dbRes.rows.length > 0) {
                    return dbRes.rows[0]
                } else {
                    return null
                }
            })
    }

}

module.exports = Comment
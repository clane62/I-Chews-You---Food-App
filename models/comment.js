const db = require('../db/db')

const Comment = {

    create: (userId, recipeId, rating, review) => {
        const sql = `
        INSERT INTO reviews(user_id, recipe_id, rating, review)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `

        return db
            .query(sql, [userId, recipeId, rating, review])
            .then(dbRes => dbRes.rows[0].user_id)
    },

    findByUserId: userId => {
        const sql = 'SELECT * FROM reviews WHERE user_id = $1'

        return db
            .query(sql, [userId])
            .then(dbRes => dbRes.rows[0])
    },

    findByRecipeId: recipeId => {
        const sql = `SELECT user_id, recipe_id, rating, review, username  FROM reviews
        INNER JOIN users
            ON reviews.user_id = users.id
        WHERE recipe_id = $1`

        return db
            .query(sql, [recipeId])
            // .then(dbRes => {
            //     if (dbRes.rows.length > 0) {
            //         return dbRes.rows[0]
            //     } else {
            //         return null
            //     }
            // })
            .then(dbRes => dbRes.rows)
    }

}

module.exports = Comment
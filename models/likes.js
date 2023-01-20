const db = require('../db/db')

const Likes = {

    countAll: (recipeId) => {
        const sql = `
            SELECT recipe_id,
            COUNT(*) AS number_of_likes
            FROM likes
            WHERE recipe_id = $1
            GROUP BY recipe_id
        `
        return db
            .query(sql, [recipeId])
            .then(dbRes => dbRes.rows[0])
    },

    create: (recipeId, userId) => {
        const sql = `
            INSERT INTO likes(recipe_id, user_id)
            VALUES($1, $2)
            RETURNING *
        `

        return db
            .query(sql, [recipeId, userId])
            .then(dbRes => dbRes.rows[0])
    }

}

module.exports = Likes


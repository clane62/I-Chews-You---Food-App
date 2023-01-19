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
        const sql = `
            SELECT 
                r.id as review_id
                ,user_id
                ,recipe_id
                ,rating
                ,review
                ,username  
            FROM reviews as r
            INNER JOIN users as u ON r.user_id = u.id
            WHERE recipe_id = $1;
        `

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
    },

    delete: reviewId => {
        const sql = 'DELETE FROM reviews WHERE id = $1'

        return db.query(sql, [reviewId])
    },

    edit: (reviewId, ratings, comment) => {
        const sql = 'UPDATE reviews SET rating = $2, review = $3 WHERE id = $1'

        return db.query(sql, [reviewId, ratings, comment])
    }

}

module.exports = Comment
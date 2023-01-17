const db = require('../db/db')

const User = {

    create: (first_name, last_name, username, email, passwordDigest) => {
        const sql = `
        INSERT INTO users(first_name, last_name, username, email, password_digest)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
        `

        return db
            .query(sql, [first_name, last_name, username, email, passwordDigest])
            .then(dbRes => dbRes.rows[0].username)
    },

    findByEmail: email => {
        const sql = 'SELECT * FROM users WHERE email = $1'
    
        return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
    },

    findByEmail: username => {
        const sql = 'SELECT * FROM users WHERE username = $1'
    
        return db
            .query(sql, [username])
            .then(dbRes => dbRes.rows[0])
    },

    findById: id => {
        const sql = 'SELECT * FROM users WHERE id = $1'

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

module.exports = User
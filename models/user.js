const db = require('../db/db')

const User = {

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
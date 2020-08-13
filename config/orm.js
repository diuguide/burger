const connection = require("../config/connection.js");

const orm = {
    all: (table, cb) => {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    create: (table, cols, vals, cb) => {
        connection.query('INSERT INTO ?? (??, ??) VALUES (?, ?)', [table, cols[0], cols[1], vals[0], vals[1]], (err, results) => {
            if (err) throw err;
            console.log("UPDATED");
            cb(results);
        })
    },
    update: (table, cols, vals, cb) => {
        const statement = connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [table, cols[0], vals[0], cols[1], vals[1]], (err, result) => {
            if (err) throw err;
            cb(result);
        })
        console.log(statement.sql);
    }
}

module.exports = orm;

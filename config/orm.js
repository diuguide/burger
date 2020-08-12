const connection = require("../config/connection.js");

const orm = {
    all: (table, cb) => {
        connection.query('SELECT * FROM ?', table, (err, data) => {
            if (err) {
                res.status(500).end();
            }
            console.log(data);
            res.json(data);
        })
    },
    create: (table, cols, vals, cb) => {
        connection.query('INSERT INTO ' + table + '(' + cols + ') VALUES (' + vals + ');', (err) => {
            if (err) {
                res.status(500).end();
            }
            console.log("UPDATED");
        })
    },
    update: (table, objColVals, condition, cb) => {
        connection.query('UPDATE' + table + 'SET' + objColVals + ' WHERE id =' + condition + ';', (err) => {
            if (err) {
                res.status(500).end();
            }
            console.log("UPDATED");
        })
    }
}

module.exports = orm;

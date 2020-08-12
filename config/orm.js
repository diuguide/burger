const connection = require("../config/connection.js");

const orm = {
    all: (table, cb) => {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
            console.log('ORM', data);
        });
    }
    // },
    // create: (table, cols, vals, cb) => {
    //     connection.query('INSERT INTO ' + table + '(' + cols + ') VALUES (' + vals + ');', (err) => {
    //         if (err) throw err;
    //         console.log("UPDATED");
    //     })
    // },
    // update: (table, objColVals, condition, cb) => {
    //     connection.query('UPDATE' + table + 'SET' + objColVals + ' WHERE id =' + condition + ';', (err) => {
    //         if (err) throw err;
    //         console.log("UPDATED");
    //     })
    // }
}

module.exports = orm;

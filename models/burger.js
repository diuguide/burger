const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.all('burgers', (res) => {
            callback(res);
        });

    },
    create: (cols, vals, callback) => {
        orm.create('burgers', cols, vals, (res) => {
            callback(res);
        })
    },
    update: (cols, vals, callback) => {
        orm.update('burgers', cols, vals, (res) => {
            callback(res);
        })
    }
};

module.exports = burger;
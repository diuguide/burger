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
    update: (objColVals, condition, callback) => {
        orm.update('burgers', objColVals, condition, (res) => {
            callback(res);
        })
    }
};

module.exports = burger;
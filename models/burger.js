var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers",  (res) => {
            cb(res);
        });
    },
    insert: (cols, vals, cb) => {
        orm.insert()
    }
};

module.exports = burger;
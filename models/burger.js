var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers',  (res) => {
            cb(res);
        });
    },
    insert: (vals, cb) => {
        orm.insert('burgers', vals, (res) => {
            cb(res);
        });
    },
    updateOne: (cb) => {
        orm.updateOne('burgers', cb);
    }
};

module.exports = burger;
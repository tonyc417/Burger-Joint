var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers',  (res) => {
            cb(res);
        });
    },
    insert: (name, cb) => {
        orm.insert('burgers', name, cb);
    },
    updateOne: (cb) => {
        orm.updateOne('burgers', cb);
    }
};

module.exports = burger;
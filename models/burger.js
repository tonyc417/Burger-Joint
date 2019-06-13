var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers",  (res) => {
            cb(res);
        });
    }
};

module.exports = burger;
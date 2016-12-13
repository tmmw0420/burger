var orm = require ('./config/orm.js'');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(results){
            cb(result);
        });
    },
    addBurger: function(cb) {
        orm.addBurger('burger_name', function(result){
            cb(result);
        });
    },
    eatBurger: function(cb) {
        orm.eatBurger('id', function(result) {
            cb(result);
        });
    }  
};

module.exports = burger;


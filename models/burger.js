var orm = require("../config/orm");

var burger = {
    SelectAll: function(cb) {
        orm.selectAll("burgers",function(res) {
            cb(res);
        });
    }
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
}
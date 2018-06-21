var orm = require("../config/orm.js");

var list = {
    all: function(cb) {
      orm.all("tasks", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("tasks", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("tasks", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb){
        orm.delete("tasks",condition, function(res){
            cb(res);
        });
    }
  };
  
  // Export the database functions for the controller (controller.js).
  module.exports = list;
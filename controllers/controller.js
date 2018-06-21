var express = require("express");

var router = express.Router();

//imports b-list so we can use it here
var list = require("../models/b-list.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    list.all(function(data) {
      var hbsObject = {
        tasks: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/bucketlist", function(req, res) {
    list.create([
      "name", "completed"
    ], [
      req.body.name, req.body.completed
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/bucketlist/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log(req.body);
  
    list.update({
      completed: req.body.completed
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });

  });

  router.delete("/api/bucketlist/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    list.delete(
      condition, function(result) {
        if (result.affectedRows == 0) {
          
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
        
      });
});

// Export routes for server.js to use.
module.exports = router;
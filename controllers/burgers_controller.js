var express = require("express");

var router = express.Router();

var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
     
  // burger.all(function(data) {
  //    var burgerObject = {
  //      burgers: data
  //    };
  //    console.log(burgerObject);
  //    res.render("index", burgerObject); 
    
  // });
db.burger.findAll({}).then(function(allburgers){
  var obj ={burgers: allburgers};
  console.log("******")
  console.log(allburgers[0].burger_name);
  console.log("******")
  return res.render("index", {all: allburgers} )
})
});

router.post("/api/burgers", function(req, res) {
  // burger.create([
  //   "burger_name"
  // ], [
  //   req.body.name, 
  // ], function(result) {
  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });
burger.burger.create({burger_name: req.body.name})
.then(function(newBurger){
  console.log("newBurger", newBurger)
  res.redirect("/")
})
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;

  console.log("id", id);

  // burger.update (req.params.id, function(result) {
  //  console.log(result);
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });

  burger.burger.update({devoured: true}, {where: {id}})
  .then(function(id){
    res.sendStatus(200)
  })
});

// Export routes for server.js to use.
module.exports = router;
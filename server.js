
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();


var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

var routes = require("./controllers/burgers_controller");
app.use(routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
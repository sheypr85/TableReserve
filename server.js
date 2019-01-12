var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [{
    name: "John",
    phone: "555-555-5555",
    email: "john@email.com",
    uniqueId: "12345"
}];
   










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


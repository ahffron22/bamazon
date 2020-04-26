var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "9978lthh7120568",
  database: "bamazon",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;

    var html = "<h1> Products </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>Product Name: " + result[i].product_name + " </p>";
      html += "<p>Department: " + result[i].department_name + " </p>";
      html += "<p>Price: " + result[i].price + " </p>";
      html +=
        "<p>Quantity Avialable: " + result[i].stock_quantity + " </p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

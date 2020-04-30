var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8010;

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
  console.log("-----------------------------");
  console.log("Welcome to Bamazon");
  console.log("-----------------------------");
  console.log("");
  console.log("Find your product below");
  console.log("");
  getItems();
});

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

var shopping = function () {
  inquirer
    .prompt([
      {
        name: "productToBuy",
        type: "input",
        message:
          "Please enter the Product ID of the item you wish to purhcase.",
      },
      {
        name: "productQuantity",
        type: "input",
        message: "How many would you like?",
      },
    ])
    .then(function (answer1) {
      var selection = answer1.productToBuy;
      connection.query(
        "SELECT * FROM products WHERE Id=?",
        selection,
        function (err, res) {
          if (err) throw err;
          if (res.length === 0) {
            console.log(
              "That product doesn't exist.Please enter a Product Id from the list above"
            );
            shopping();
          } else {
            console.log("all is ok");
            shopping();
          }
        }
      );
    });
};

function getItems() {
  var query = "select * from products";
  connection.query(query, function (err, res) {
    console.table(res);
    shopping();
  });
}

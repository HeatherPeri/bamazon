var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Forever21",
  database: "schema.sql"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 1,
        product_name: Boots,
        department_name: Clothing,
        price: $200,
        stock_quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
    function createProduct() {
        console.log("Inserting a new product...\n");
        var query = connection.query(
          "INSERT INTO products SET ?",
          {
            item_id: 2,
            product_name: BlowDryer,
            department_name: hair,
            price: $250,
            stock_quantity: 70
          },
          function(err, res) {
            console.log(res.affectedRows + " product inserted!\n");
            updateProduct();
          }
        );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 3,
        product_name: Boots,
        department_name: Clothing,
        price: $200,
        stock_quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 4,
        product_name: Ring,
        department_name: Jewlery,
        price: $2500,
        stock_quantity: 30
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 5,
        product_name: iPhone,
        department_name: Electronics,
        price: $500,
        stock_quantity: 75
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 6,
        product_name: Blender,
        department_name: Kitchen,
        price: $50,
        stock_quantity: 20
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 7,
        product_name: Computer,
        department_name: Electronics,
        price: $2000,
        stock_quantity: 15
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 8,
        product_name: Leggings,
        department_name: Clothing,
        price: $20,
        stock_quantity: 54
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 9,
        product_name: Straightner,
        department_name: Hair,
        price: $29,
        stock_quantity: 5
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item_id: 10,
        product_name: Earrings,
        department_name: Jewlery,
        price: $200,
        stock_quantity: 57
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        updateProduct();
      }
    );
  
    console.log(query.sql);
  }
  
  
     
// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
function purchase() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // once you have the items, prompt the user for which they'd like to bid on
      inquirer
        .prompt([
          {
            name: "choice",
            type: "item_id",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_name);
              }
              return choiceArray;
            },
            message: "What item would you like to purchase?"
          },
          {
            name: "amount",
            type: "input",
            message: "How many would you like to purchase?"
          }
        ])
        .then(function(answer) {
          // get the information of the chosen item
          var chosenItem;
          for (var i = 0; i < results.length; i++) {
            if (results[i].item_name === answer.choice) {
              chosenItem = results[i];
            }
          }
  
          if (chosenItem.purchase < parseInt(answer.bid)) {
            connection.query(
              "UPDATE auctions SET ? WHERE ?",
              [
                {
                  Item: purchase
                },
                {
                  id: chosenItem.id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Order placed successfully!");
                start();
              }
            );
          }
          else {
            console.log("We are out of that quanitiy please try back later");
            start();
          }
        });
    });
  }
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase

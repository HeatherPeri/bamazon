var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Forever21!",
  database: "bamazon"
});connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  managerMenu();
});

function managerMenu() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
managerOptions(res);
  });
}
function managerOptions(products) {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      choices: ["Products", "Low Inventory", "Add", "Add New", "Quit"],
      message: "What would you like to do?"
    })
    .then(function(val) {
      switch (val.choice) {
      case "Products":
        console.table(products);
        managerMenu();
        break;
      case "Low Inventory":
        lowInventory();
        break;
      case "Add":
        addInventory(products);
        break;
      case "Add New":
        newProduct(products);
        break;
      default:
        console.log("bye");
        process.exit(0);
        break;
      }
    });
}
function lowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity <= 2", function(err, res) {
    if (err) throw err;
    console.table(res);
    managerMenu();
  });
}
function addInventory(inventory) {
  console.table(inventory);
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item?",
        validate: function(val) {
          return !isNaN(val);
        }
      }
    ])
    .then(function(val) {
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);
if (product) {
        quantity(product);
      }
else {
        managerMenu();
      }
    });
}

function quantity(product) {
  inquirer
.prompt([
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to add?",
        validate: function(val) {
          return val > 0;
        }
      }
    ])
    .then(function(val) {
      var quantity = parseInt(val.quantity);
      addQuantity(product, quantity);
    });
}
function addQuantity(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
    [product.stock_quantity + quantity, product.item_id],
    function(err, res) {
    console.log("Added " + quantity + " " + product.product_name);
      managerMenu();}
  );
}
function newProduct(products) {
inquirer
.prompt([
      {
        type: "input",
        name: "product_name",
        message: "What is the name of the product you would like to add?"
      },
      {
        type: "list",
        name: "department_name",
        choices: getDepartments(products),
        message: "Which department does this product fall into?"
      },
      {
        type: "input",
        name: "price",
        message: "How much does it cost?",
        validate: function(val) {
          return val > 0;
        }
      },
      {
        type: "input",
        name: "quantity",
        message: "How many do we have?",
        validate: function(val) {
          return !isNaN(val);
        }
      }
    ])
    .then(addNewProduct);
}
function addNewProduct(val) {
  connection.query(
    "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)",
    [val.product_name, val.department_name, val.price, val.quantity],
    function(err, res) {
      if (err) throw err;
      console.log(val.product_name + " ADDED TO BAMAZON!\n");
      managerMenu();
    }
  );
}
function getDepartments(products) {
  var departments = [];
  for (var i = 0; i < products.length; i++) {
    if (departments.indexOf(products[i].department_name) === -1) {
      departments.push(products[i].department_name);
    }
  }
  return departments;
}
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
}

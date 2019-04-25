DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
item_id INT,
product_name VARCHAR (20),
department_name  VARCHAR (20),
price INT,
stock_quantity INT
);

SELECT * FROM products;
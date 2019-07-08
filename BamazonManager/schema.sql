DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(25) NOT NULL,
  department_name VARCHAR(25) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("boots", "clothing", 50, 100),
  ("blowdryer", "beauty", 67, 8),
  ("ring", "jewlery", 9.90, 90),
  ("iphone", "tech", 990, 20),
  ("blender", "kitchen", 75, 22),
  ("computer", "tech", 1200, 88),
  ("leggings", "clothing", 8, 4),
  ("flat iron", "beauty", 30, 60),
  ("earrings", "jewlery", 14, 11),
  ("socks", "clothing", 5, 15);
drop database if exists bamazon;
CREATE DATABASE bamazon;
USE bamazon;

create table products (
id integer not null auto_increment,
product_name varchar (100) not null, 
department_name varchar (100) not null, 
price  varchar (100) not null, 
stock_quantity   varchar (100) not null, 
primary key (id)
);

select * from products;

insert into products (product_name, department_name, 
price, stock_quantity) values (
"Toilet Paper", "Toiletries", "$1000", "100");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Hand Sanitizer", "cleaners", "$100", "0");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Pillow", "Bedding", "$1", "100");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Blanket", "Bedding", "$50", "40");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Hiking Boots", "Footwear", "$150", "70");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Shoes", "Footwear", "$150", "50");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Socks", "Footwear", "$10", "20");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"T-shirt", "Clothing", "$1000", "30");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Jacket", "Clothing", "$100", "40");
insert into products (product_name, department_name, 
price, stock_quantity) values (
"Sunglasses", "Eyewear", "$300", "30");


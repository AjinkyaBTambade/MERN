create database shoppingCart;
use shoppingCart;

create table products(productId int not null auto_increment primary key, productName varchar(20) ,price int);
insert into products (productName, price) values('mobile',12000);
insert into products (productName, price) values('laptop',75000);
insert into products (productName, price) values('earpots',999);
insert into products (productName, price) values('TV',17000);
insert into products (productName, price) values('watch',5000);
select * from products;


create table credentials(credentialId int not null auto_increment primary key,email varchar(30),password varchar(8),name varchar(30),location varchar(20),age int);
insert into credentials (email,password,name,location,age) values('bhorsanika0239@gmail.com','sanika','sanika bhor','machar',19);
insert into credentials (email,password,name,location,age) values('sumitbhor@gmail.com','sumit','sumit bhor','manchar',18);
select * from credentials;

create table orders(id int not null auto_increment primary key,date date,total int,status varchar(15));
insert into orders (date,total,status) values('2024-4-7',2500,'intransmit');
insert into orders (date,total,status) values('2024-7-4',2500,'processed');
insert into orders (date,total,status) values('2024-2-14',8900,'processed');
insert into orders (date,total,status) values('2024-9-4',999,'intransmit');
select * from orders;
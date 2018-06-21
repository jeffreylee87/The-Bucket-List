CREATE DATABASE blist_db;
USE blist_db;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
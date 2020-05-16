
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	PRIMARY KEY (id)
)
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)
)
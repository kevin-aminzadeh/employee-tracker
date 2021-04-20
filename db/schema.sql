DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE Department(
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL ,
  PRIMARY KEY (id)
);

CREATE TABLE Role (
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(11, 4) NOT  NULL,
  department_id INTEGER(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES Department(id),
  CHECK (salary >= 0)
);

CREATE TABLE Employee(
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER (10),
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES Role(id),
  FOREIGN KEY (manager_id)
  REFERENCES Employee(id)
);




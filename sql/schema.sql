--info of the schema database-- 

CREATE DATABASE employees_db; 

USE employees_db

CREATE TABLE departments (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE NOT NULL 
);

CREATE TABLE roles (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25) UNIQUE NOT NULL, 
  salary FLOAT UNSIGNED NOT NULL, 
  department_id INT UNSIGNED NOT NULL, 
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(25) NOT NULL, 
  last_name VARCHAR(25) NOT NULL,
  role_id INT UNSIGNED NOT NULL, 
  manager_id INT UNSIGNED NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);

--giving views of the schema database input--


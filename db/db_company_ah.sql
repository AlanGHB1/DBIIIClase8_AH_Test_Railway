CREATE DATABASE IF NOT EXISTS db_company_ah;

USE db_company_ah;

CREATE TABLE IF NOT EXISTS td_empleados_ah (
  id_ah INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_ah VARCHAR(45) DEFAULT NULL,
  salario_ah INT(11) DEFAULT NULL
);

DESCRIBE td_empleados_ah;

INSERT INTO td_empleados_ah (nombre_ah, salario_ah) VALUES 
  ('Alan Hidalgo', 20000),
  ('Joe Rogan', 40000),
  ('Jonny Deph', 50000);

SELECT * FROM td_empleados_ah;

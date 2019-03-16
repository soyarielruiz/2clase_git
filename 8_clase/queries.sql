/*
	DBs
*/

SELECT * FROM `alumnos` WHERE nombre LIKE 'h%'
SELECT * FROM `alumnos` WHERE nombre LIKE '__r%'

-- % Longitud de caracteres de longitud variable
-- _ un solo caracter

UPDATE `alumnos` SET nombre = 'juan' WHERE id > 0;

-- si uso primary key lo permite

--Modo seguro 
-- SET SQL_SAFE_UPDATES = 1/0;

UPDATE `alumnos` SET `nombre` WHERE id = 1;

-- Borrar registros
DELETE FROM `alumnos` WHERE id = 2;

-- Vaciar table
TRUNCATE `alumnos`;
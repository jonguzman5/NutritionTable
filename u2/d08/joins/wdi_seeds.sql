DROP TABLE IF EXISTS monsters;
DROP TABLE IF EXISTS students;

CREATE TABLE monsters(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  strength VARCHAR (50) NOT NULL,
  weakness VARCHAR (50)
);

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  familiar VARCHAR (50)
);


COPY monsters
  (name, strength, weakness)
FROM '/Users/timothygardner/code/wdi-xfiles/WDI-xfiles-instructors/u2/d08/joins/monsters.csv'
    DELIMITER ',' CSV;

COPY students
  (name, familiar)
FROM '/Users/timothygardner/code/wdi-xfiles/WDI-xfiles-instructors/u2/d08/joins/students.csv'
    DELIMITER ',' CSV;

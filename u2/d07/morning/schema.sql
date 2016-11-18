DROP TABLE IF EXISTS games;

CREATE TABLE Games (
   id SERIAL PRIMARY KEY,
   title VARCHAR (50) NOT NULL,
   year INTEGER NOT NULL,
   developers VARCHAR (50),
   genre VARCHAR (50)
 );

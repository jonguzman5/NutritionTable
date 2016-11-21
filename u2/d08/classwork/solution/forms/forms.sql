CREATE TABLE users(
  id serial primary key,
  name varchar(50), 
  email varchar(50),
  password varchar(50)
  );

INSERT INTO users (name, email, password) VALUES ('john', 'bell@ga.co', 'secret'), ('jared', 'jared.murphy@ga.co', 'rush4life'), ('bryan', 'bryan.mytko@ga.co', 'notfromjapan');


-- create a database for today. 
-- we need a user's table. it has to have a name, email and password for each user. 
-- seed the database with a few sample people. 
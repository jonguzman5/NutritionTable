DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS saved CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE saved (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  servingsize NUMERIC,
  servingpercontainer NUMERIC,
  calories NUMERIC,
  caloriesfromfat NUMERIC,
  totalfat NUMERIC,
  saturatedfat NUMERIC,
  transfat NUMERIC,
  cholesterol NUMERIC,
  sodium NUMERIC,
  totalcarbohydrate NUMERIC,
  dietaryfiber NUMERIC,
  sugars NUMERIC,
  protein NUMERIC,
  vitamina NUMERIC,
  calcium NUMERIC,
  vitaminc NUMERIC,
  iron NUMERIC,
  saved_id INTEGER REFERENCES users(id)
);

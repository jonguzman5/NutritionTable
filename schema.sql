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
  servingsize VARCHAR(100),
  servingpercontainer VARCHAR(100),
  calories VARCHAR(100),
  caloriesfromfat VARCHAR(100),
  totalfat VARCHAR(100),
  saturatedfat VARCHAR(100),
  transfat VARCHAR(100),
  cholesterol VARCHAR(100),
  sodium VARCHAR(100),
  totalcarbohydrate VARCHAR(100),
  dietaryfiber VARCHAR(100),
  sugars VARCHAR(100),
  protein VARCHAR(100),
  vitamina VARCHAR(100),
  calcium VARCHAR(100),
  vitaminc VARCHAR(100),
  iron VARCHAR(100),
  saved_id INTEGER REFERENCES users(id)
);

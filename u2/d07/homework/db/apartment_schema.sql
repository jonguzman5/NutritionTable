-- Put apartment schema here
DROP TABLE IF EXISTS doormen;
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  num_floors INTEGER NOT NULL
);

CREATE TABLE doormen (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  experience INTEGER NOT NULL,
  shift VARCHAR(50),
  building_id INTEGER REFERENCES buildings(id)
);

CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  floor INTEGER NOT NULL,
  name VARCHAR(50),
  price INTEGER NOT NULL,
  sqft INTEGER NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  building_id INTEGER REFERENCES buildings(id)
);

CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INTEGER NOT NULL,
  gender VARCHAR(50),
  apartment_id INTEGER REFERENCES apartments(id)
);


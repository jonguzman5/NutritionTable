DROP TABLE IF EXISTS actors;
DROP TABLE IF EXISTS movies;

-- enter create table commands here

INSERT INTO movies (name, release_year, genre) VALUES ('Tropic Thunder', 2008,
'comedy');
INSERT INTO movies (name, release_year, genre) VALUES ('Envy', 2004, 'comedy');
INSERT INTO movies (name, release_year, genre) VALUES ('Tenacious D', 2006,
'comedy');
INSERT INTO movies (name, release_year, genre) VALUES ('Anchorman', 2004,
'comedy');
INSERT INTO movies (name, release_year, genre) VALUES ('Edward Scissorhands',
1990, 'drama');

INSERT INTO actors (name, gender, movie_id) VALUES ('Ben Stiller', 'Male', 2);
INSERT INTO actors (name, gender, movie_id) VALUES ('Owen Wilson', 'Male', 6);
INSERT INTO actors (name, gender, movie_id) VALUES ('Vince Vaughn', 'Male', 4);
INSERT INTO actors (name, gender, movie_id) VALUES ('Will Ferrell', 'Male', 4); 
INSERT INTO actors (name, gender, movie_id) VALUES ('Jack Black', 'Male', 1);
INSERT INTO actors (name, gender, movie_id) VALUES ('Christina Applegate', 'Female', 4);
INSERT INTO actors (name, gender, movie_id) VALUES ('Winona Ryder', 'Female', 5);


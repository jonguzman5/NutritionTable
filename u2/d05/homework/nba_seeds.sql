-- empty out DB
DROP TABLE IF EXISTS players;

-- add create table here
CREATE TABLE players(
  name varchar(50) NOT NULL,
  team varchar(50) NOT NULL,
  age integer NOT NULL,
  games integer NOT NULL,
  points integer NOT NULL
);

-- this needs to include YOUR PATH!! YOURS! NOT THE PATH LISTED BELOW!
COPY players
  (name, age, team, games, points)
FROM '/Users/student_05/WDI-xfiles-scully/u2/d05/homework/nba_season_2011_2012.csv'
    DELIMITER ',' CSV;


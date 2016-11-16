-- empty out DB
DROP TABLE IF EXISTS players;

-- add create table here


-- this needs to include YOUR PATH!! YOURS! NOT THE PATH LISTED BELOW!
COPY players
  (name, age, team, games, points)
FROM '/Users/Jared/pangolins/u2_the_server/d24_psql/homework/nba_season_2011_2012.csv'
    DELIMITER ',' CSV;

![](http://i.giphy.com/KMrye8vZpv6py.gif)

# Morning Exercise - SQL 64

Take the following schema for a N64 SQL database

``` SQL
 CREATE TABLE Games (
   id SERIAL PRIMARY KEY,
   title VARCHAR (50) NOT NULL,
   year INTEGER NOT NULL,
   developers VARCHAR (50),
   genre VARCHAR (50)
 );
```

Create a database with this schema and seed it with some sample data

```SQL
INSERT INTO Games(title, year, developers, genre) VALUES('The Legend of Zelda: The Ocarina of Time', 1998, 'Nintendo EAD', 'Action-Adventure');
INSERT INTO Games(title, year, developers, genre) VALUES('Super Smash Bros.', 1999, 'Hal Laboratory', 'Fighting');
INSERT INTO Games(title, year, developers, genre) VALUES('Super Mario 64', 1996, 'Nintendo EAD', 'Platformer');
INSERT INTO Games(title, year, developers, genre) VALUES('Golden Eye 007', 1997, 'Rare', 'First-Person Shooter');
INSERT INTO Games(title, year, developers, genre) VALUES('Mario Kart 64', 1996, 'Nintendo EAD', 'Racing');
INSERT INTO Games(title, year, developers, genre) VALUES('Star Fox 64', 1997, 'Nintendo EAD', 'Rail/Scrolling Shooter');
INSERT INTO Games(title, year, developers, genre) VALUES('Perfect Dark', 2000, 'Rare', 'First-Person Shooter');
INSERT INTO Games(title, year, developers, genre) VALUES('Star Wars: Shadow of the Empire', 1996, 'Lucas Arts', 'Action');
INSERT INTO Games(title, year, developers, genre) VALUES('Banjo-Kazooie', 1998, 'Rare', 'Platforming');
INSERT INTO Games(title, year, developers, genre) VALUES('Mario Party', 1998, 'Hudson Soft', 'Party Game');
INSERT INTO Games(title, year, developers, genre) VALUES('Tony Hawk\'s Pro Skater' , 1996, 'Neversoft', 'Extreme Sports');
```

## Queries

Use SQL queries to complete the following tasks

1. Select the title of all games

2. Show all the years in the database.

3. Show the title of each game made by 'Rare'.

4. Select all games that were made before 1998.

5. Find the average release year of all games made by 'Nintendo EAD'

6. Show the developer names of each game, in alphabetical order.

7. Show the titles of games not made by 'Nintendo EAD'.

8. Add the the game 'F-Zero X', released in 1998, made by 'Nintendo EAD', and with the genre 'Racing'.

9. Show all the game titles ordered by their release year.

10. Remove all games not made by 'Hudson Soft'.

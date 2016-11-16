# SQL homework, NBA Style!!

![](https://media.giphy.com/media/3mISSzQUAVwmQ/giphy.gif)

## Setup

Use the included file, `nba_season_2011-12.csv` to solve the following problems. This exercise asks you to work with the following files:

1. `nba_seeds.sql`: creates and inserts into the NBA table
2. `nba_queries.sql`: gets data out of the NBA table (you need to add this one!)

### Completion

**Please finish through Part 4.**

## Part 1

1. Create a database called `nba_db`.
1. Create a SQL script called `nba_seeds.sql` that:
  1. drops a table named `players` if it exists,
  1. creates a table called `players` with columns for:
    - `name`
    - `age`
    - `team`
    - `games`
    - `points`
  1. inserts the player:<br>
     `Anderson Varejao, age: 29, team: CLE, games: 25, points: 271`.

You should be able to run `nba_seeds.sql` and populate your `nba_db` from the command line with:

```
$ psql -d nba_db -f nba_seeds.sql
```

## Part 2

Look at the `nba_seeds.sql` file, where the copy players is commented out - what do you think it is doing?

Make necessary edits to this file in order to get it to run on your machine. The command `pwd` in your terminal may help!

Afterwards, run:

```
$ psql -d nba_db -f csv_seeds.sql
```

## Part 3

Some of the prompts may go a little further than what we saw in class, but should be very easy to Google / help each other out with. Some useful things to look up:
* WHERE
* ORDER BY
* LIMIT
* AVG

Keeping track of your answers (and the SQL query that gave you the answer) in a file called `nba_queries.sql`, figure out the appropriate SQL commands to return the following:

1. All columns for all players from the New York Knicks (NYK).
2. All columns for all players from the Indiana Packers (IND) who are under 26 years old.
3. All columns for all players, ordered from least points scored to most points scored.
4. Name and Points per game (points/games), for the players with the top 20 points per game.
5. The average age for all players.
6. The average age for all players on the Oklahoma City Thunder (OKC).
7. The average age for all players who played more than 40 games.

## Part 4

Add the following to your `nba_queries.sql` file:

1. The team and total points scored from all players on that
team (team points) ordered from most team points to least.


2. The age and the average points per game for that age, ordered from oldest to youngest for all ages.

3. The team and the the number of players who score above 12 points per game on that team, ordered from the most number of players to the least number of players.

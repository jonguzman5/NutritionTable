1. SELECT name FROM players WHERE team = 'NYK';
2. SELECT name FROM players WHERE team = 'IND'AND age < 26;
3. SELECT name FROM players ORDER BY points DESC;
4. SELECT name, points FROM players ORDER BY points DESC LIMIT 20;
5. SELECT AVG(age) FROM players;
6. SELECT AVG(age) FROM players WHERE team = 'OKC';
7. SELECT AVG(age) FROM players WHERE games > 40;
SELECT team, SUM(points) FROM players GROUP BY team ORDER BY SUM(points) ASC;
SELECT age, avg(points/games) FROM players GROUP BY age ORDER BY age DESC;
SELECT team, count(name)FROM players WHERE (points/games)>12 GROUP BY team ORDER BY count(name) ASC;

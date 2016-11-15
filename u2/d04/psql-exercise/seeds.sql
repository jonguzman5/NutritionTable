DROP TABLE IF EXISTS voters; 

CREATE TABLE voters (
  id serial PRIMARY KEY,
  name varchar(50),
  email varchar(50),
  age integer,
  state varchar(2),
  voted boolean,
  candidate varchar(50)
);

INSERT INTO voters (name, email, age, state, voted, candidate) VALUES
('John Bell', 'bell@ga.co', 31, 'NY', true, 'giant meteor'),
('Bryan Mytko', 'bryan.mytko@ga.co', 36, 'NY', false, ''),
('Noah Smith', 'noah@sample.com', 35, 'NJ', true, 'Hillary'),
('Alvin Li', 'alvin@sample.com', 24, 'WA', true, 'Trump'),
('Reggie Wade', 'reggie@sample.com', 27, 'CA', true, 'Hillary'),
('Justin Kaza', 'justin@sample.com', 29, 'PA', true, 'Trump'),
('May Xang', 'may@sample.com', 32, 'CA', false, ''),
('Michelle Jones', 'michelle@sample.com', 62, 'NJ', true, 'Trump'),
('Frank Wilson', 'frank@sample.com', 41, 'PA', true, 'Trump'),
('Claire Abbot', 'claire@sample.com', 55, 'FL', false, ''),
('Pauline Short', 'Pauline@sample.com', 43, 'GA', true, 'Hillary'),
('Bernie Sanders', 'bernie@sample.com', 70, 'WA', true, 'Trump'),
('Timothy Dzick', 'timothy@sample.com', 29, 'NM', false, ''),
('Karen Weber', 'karen@sample.com', 19, 'FL', true, 'Trump'),
('Lee Weber', 'lee@sample.com', 32, 'AK', true, 'Trump'),
('Bubbles McGee', 'karen@sample.com', 80, 'CO', true, 'Hillary')



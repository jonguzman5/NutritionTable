# Homework
# Hello, Sinatra!

![SINATRA](http://i.imgur.com/b4tlCNb.gif)


## Assignment
For this homework you will be building a small Sinatra app from scratch. For each route, the response should be some html text from an `erb` file. Try to reuse `erb` files if you can, by using `instance variables` from the `server.rb` file Be sure to set up your Sinatra app correctly, and to include the `gems` you need.

## Completion
Completion is all problems for this assignment.
## Part 1

You should use `Sinatra` and a Browser to interact with the following programs.

**Example**:

- Request: `/name/john`
  - Response: `Hello John!`

- Request: `/name/bryan`
  - Response: `Hello Bryan!`

- Request: `/name/heidi`
  - Response: `Hello Heidi!`

- Request: `/name/tims`
  - Response: `Hello Tims!`

- Request: `/name/jared`
  - Response: `Hello Jared!`

### It takes two to Sinatra

![SINATRA](http://i.imgur.com/RHb2pZ2.gif)

**Example:**

- Request: `/tea/neel/andy`
  - Response: `neel and andy are having a lovely tea ceremony`

- Request: `/battle/neel/andy`
  - Response: `neel beats andy.`
  - *note:* the winner should be randomly generated.


### Sinatrivia

![SINATRA](http://i.imgur.com/GKpnU3i.gif)

For this section, the answer to each question will be the next route.

**Example:**

- Request: `/`
  - Response: `Who was the first man in space?`

- Request: `/yuri_gagarin`
  - Response: `Correct. Who was the first man on the moon?`

- Request: `/neil_armstrong`
  - Response: `Correct. etc`

After the `/neil_armstrong` route, add two more questions of your own.

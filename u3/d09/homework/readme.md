![](http://i.giphy.com/BDDQCaXmBrhCg.gif)

# Homework - Model Associations

## Introduction
Now that you are all experts in Rails' associations we are going to practice everything by creating a GA Forum application!

## Setup
Do all work in your `homework` directory. No work or application has been supplied to you. Good Luck :)!

## Completion
Complete through part 5.

## Assignment
You have been given a blank canvas - nothing has been provided for you, so you must do the following:

#### 1. Create a rails application called `ga_forum_app`
  - Make sure you go through all the proper steps of setting up your application.

#### 2. Generate your models
Generate models with the following:
  - course
    * course_name
    * class_name
  - user
    * name
    * email
    * course_id
  - topic
    * title
    * content
    * user_id
    * created_at
  - comment
    * content
    * topic_id
    * user_id
    * created_at

#### 3. Draw out an ERD diagramming the relations for this application

#### 4. Create model associations
  - Go through your models and schema, adding the correct associations between each table.

#### 5. Set up your app to create content!
  - Your app should allow creation of users, courses, topics, and comments.
  - The app should have pages for courses (including which students are enrolled), users (showing which course they are enrolled in), and topics (including the comments)
  - We should be able to see which user created each comment.

# Part 2 - Actionmailer

![emails gif](https://media.giphy.com/media/xTiTnHtsQnLS8kTp0k/giphy.gif)

#### 6. Use the GA forum app you worked on for this section.

 -  Add subscription functionality for your forum.
 - Create a "subscribe" button on your index page. If a user clicks it, have that user be redirected to a page saying that they have subscribed.
 - Make sure you set up a Subscribers model (which should reference the Users model), Subscribers controller, and views, and capture the user's data when they subscribe.
 -  Send the subscriber an initial "Welcome to my forum!" email when the user successfully subscribes (is successfully added to the database).

# Bonus
 -  Every time a new post is added to your forum, send the user an email with the topic "New Post: (title of post)" and a link to that post in the body of the email.

## Resources
 -  https://launchschool.com/blog/handling-emails-in-rails
 -  http://guides.rubyonrails.org/action_mailer_basics.html

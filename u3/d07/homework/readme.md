# Real Gems

![image](http://i.giphy.com/lxz1QBPH3qQJa.gif)

More Ruby Reps!

For tonight's assignment, you will be building a Gem Wiki app. No, not Ruby gems, real gems!

Users on this site want to be able to see the collection of gems, and information about them. But to avoid any confusion, we're going to refere to our gems as rocks (fancy rocks!). If we used `gem`, our app would fail due to a namespacing issue.

#### Completion

Completion is through __Part 4__. Try the Bonuses to prepare for your upcoming project!

Before you begin, take a minute to read over this [Migration Gist](https://gist.github.com/bryanmytko/b0407ead43bac5e93c4f8153ba3b9aae) created by the notable Bryan Mytko.

All your forms need to use a form helper! 


#### Part 1: Setup

Create a new Rails app using the following command:

```bash
rails new real_rocks --database=postgresql
```

Now to set up your database of `rocks`. To create the database run:

`rails db:create`

To create a table of rocks, you need to run:

`rails generate model CreateRocks`

This'll create your migration file. Your rocks should have the following attributes:

- name - string
- description - string
- image - string

After this migration file is complete, run it:

`rails db:migrate`

Time to seed some test data! Copy the contents of `rocks.rb` into your `db/seeds.rb` file.

Now you can run the seeds with:

`rails db:seed`

NOTE: The seeds rely on an ActiveRecord class, and will fail if you haven't written your models.

Now in your `config/routes.rb` file, call the `resource` method to auto generate all of your rock resource routes. You're now ready to start.


#### Part 2: The Gallery of Rocks


- Have your '/' route default to the '/rocks' view.

- Create a partial for the a heading that says, "The Gallery of Rocks".

- GET requests to '/' should forward to `/rocks`, and `render` you heading partial here, followed by an unordered list of `links` to rocks, i.e. `/rocks/1`, `/rocks/2`, `/rocks/3`, and so on.


#### Part 3: Under Inspection & Review


- GET requests to `/rocks/1` should display the `name`, `description`, and `image` of the gem with the id of 1, while GET requests to `/rocks/7` should display the information of the gem with the id of 7.

- Add a link to `/rock/THE_ID_OF_THE_ROCK_IN_QUESTION/edit`. Clicking this link should take you to a `form_for` editing the information for a particular rock. Using the form helper, have the fields pre-populated with the values of the rock. When the user `submits` this form, the changes to the rock should be persisted to the database, and the user should be redirected to that rock's `show` page where the edits you made will be reflected. 

- Add an appropriately named button that allows the user to delete the rock and then removes the rock from the database and redirects the user to The Gallery of Rocks. The rock you deleted should no longer be listed in the Gallery of Rocks.

- Create a partial that allows the user to both return to The Gallery of Rocks and to the `show` page of the rock you are currently deciding to edit. You know, in case they change their mind.



#### Part 4: Mining Rocks


- GET requests to `/rocks/new` should take the visitor to a form for creating a new rock. Make sure to use a form helper!

- When the user `submits` the form, a new rock is created in the database, and the user is redirected to The Gallery of Rocks. If all has gone according to plan, the newly created rock should show up in the list.

- Add a partial on this page that allows the user to return home.


####BONUS

Refactor your forms! Try to `render` all your forms partials. If you didn't initially, try to use helpers for [images](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html), [routes](http://guides.rubyonrails.org/routing.html), and [links](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html).

####SUPER BONUS

Create a `nav` and `footer` partial that is included on all your views. The `header` partial should include links that allow the user to return `'/'` or to create a new rock. The `footer` partial should include links to your personal github page, social media, and something random that you love. Make sure to remove any previously included partials/links that do the exact same thing as the our `nav`.

Write some Sass or CSS to add some style to your app. Add some front end magic with JS!





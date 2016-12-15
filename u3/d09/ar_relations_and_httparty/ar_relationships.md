# Intro to AR Relationships

===== Laptops Closed =====

### Learning Objectives
- Learn to draw out AR relationships
- Explain the difference btwn
	- has_one & why it's not used as often
	- has_many & belongs_to
	- many to many
		- has many, belongs to many
		- has many, belongs to many :through
- Set up a has_many & belongs_to relationship
- Test the relationship


### Why this is important
A deeper understanding of common AR relationships will increase our ceiling of data mapping capabilities. Most basic SQL relationships seem pretty straight forward. However, a deeper look at table relationships will open our eyes to the potential and limitations of relational data mapping, which we will need in order to build more complex and creative applications!

### Relationships
A hefty part of designing a relational database is dividing the data elements into related tables. Once you're ready to start working with the data, you rely on relationships between the tables to pull the data together in meaningful ways. For instance, order information is useless unless you know which customer placed a particular order.

### GOOD DOCS
This will be your best friend if you ever work on a rails app of any significant complexity.

[http://guides.rubyonrails.org/association_basics.html](http://guides.rubyonrails.org/association_basics.html)


### Relationship Types
An association, in this context, is a connection between two ActiveRecord models. Associations are implemented using macro-style calls, so that you can declaratively add features to your models. For example, by declaring that one model belongs_to another, you instruct your application to maintain Primary Key-Foreign Key information between instances of the two models, and you also get a number of utility methods added to your model.

- ```has_one``` - A has_one association also sets up a one-to-one connection with another model, but with somewhat different semantics (and consequences). This association indicates that each instance of a model contains or possesses one instance of another model.
- ```has_many``` - Indicates a one-to-many connection with another model. This association indicates that each instance of the model has zero or more instances of another mode.
- ```belongs_to``` - A belongs_to association sets up a one-to-one connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.
- ```has_and_belongs_to_many``` - A has_and_belongs_to_many association creates a direct many-to-many connection with another model, with no intervening model.
- ```has_many :through``` - A has_many :through association is often used to set up a many-to-many connection with another model. This association indicates that the declaring model can be matched with zero or more instances of another model by proceeding through a third model.

##### Let's Break these concepts down into tangible examples.
###### has_one
There are 3 users
There are 5 books
A user has one book.

```
What's involved in this relationship?
- Model: allow the model/class to have access to the relationship
- DB: Set up the corresponding table
- Draw the table
```

The user has to be able to call .book (not .books, because user can only have 1 book).

The user needs to access the book_id number. So the user table needs a book_id column. It's essentially the same as user.name or user.age

This is why the has_one isn't used as commonly. It's meant purely for one:one relationship that's entirely mutually exclusive.

The premise is the same for most relationships.
- Give the class/model the access:

```
class User < ActiveRecord::Base
	has_one :book
end
```
- Make the migration required to access the data in the DB (see the docs).

The end result functionally should be something like this...

joe = User.find(name: Joe)
book = Book.find(params[:book_id])

joe.book = book

###### has_many & belongs_to
This is one of the most popular relationships and what we'll really be focusing on today. One model can have many other instances of a model but that "possessed" model is MUTUALLY EXCLUSIVE. A user can have many books, but a book can only belong to one user at a time.

Let's say we're building an app for a Tuxedo rental store.

- Users table
- Tuxedos table

A user wants to rent 5 tuxedos.
Can anyone else rent those tuxedos?
Can a user rent the same tuxedo twice at the same time?
Think inherently about the nature of data and instances.


-----
Exercise:
Draw this table out then let's review.
-----

### Start a has_many & belongs_to app
I'm going to create a `gold-nfl-players-app`. I want to create players and teams. And then assign them.
- rails new gold-nfl-players-app -d postgresql
- cd into the app
- rake db:create
- create the Player class in models
	- first_name
	- last_name
- create the Players table via migration
```
class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
    	t.string :first_name
    	t.string :last_name
      t.timestamps null: false
    end
  end
end
```
- rake db:migrate
- seed.rb
	-
	```
	Player.delete_all
	Player.create([{ first_name: "Darrelle", last_name: "Revis"}, {first_name: "Aaron", last_name: "Rodgers"}, { first_name: "Dominique", last_name: "Rodgers-Cromartie"}])
	```
- rake db:seed
- verify in rails c with Player.all

So far so good.

### Building a second model
For the sake of brevity let's use this shortcut:
- ```rails g model Team name:string city:string```
- rake db:migrate
- Maybe I'll throw validation on this model too, I might have done so on my players, completely optional for this demo.
- Edit my seeds file
```
Player.delete_all
Team.delete_all
Player.create([{ first_name: "Darrelle", last_name: "Revis"}, {first_name: "Aaron", last_name: "Rodgers"}, { first_name: "Dominique", last_name: "Rodgers-Cromartie"}])
Team.create([{ name: "Jets", city: "New York" }, { name: "Giants", city: "New York" }, { name: "Packers", city: "Green Bay" } ])
```
- rake db:seed
- rails s and verify both my models are seeded.

### Setting Up Models
ORM uses ruby. Ruby is OOP and all about accessibility. We need to program in all the accessible functions so that our models can recognize each other and use methods to do so.

Luckily AR provides us the methods. But how do we give access to those methods on both sides? Rails to the rescue.

###### Give the models proper AR methods accessibility
```
class Team < ActiveRecord::Base
	validates :name, presence: true
	validates :city, presence: true

	has_many :players
end

```

```
class Player < ActiveRecord::Base
	validates :first_name, presence: true
	validates :last_name, presence: true

	belongs_to :team
end
```

Remember, teams have many players, a player belongs to a team.

```
Ownership is backwards in terms of ID. What does this mean? How does this look like in our SQL database?
```

###### Add the migration so that the team model has many players
`rails g migration AddHasManyPlayersToTeamModel`
• Notice the lack of snake casing when typing this rails command. The outcome of the migration file is the EXACT same. This is just a random quirk.

```
class AddHasManyPlayersToTeamModel < ActiveRecord::Migration
  def change
  	add_reference :players, :team, index: true
  end
end
```

- rake db:migrate
- TEST TEST TEST
- rails c

```
revis = Player.find_by(first_name: "Darrelle")
jets = Team.find_by(name: "Jets")

jets.players
jets.players.count
jets.players << revis
jets.players
jets.players.count
revis.team
revis.team.name
revis.team.city
revis.team.id

giants = Team.find_by(name: "Giants")
giants.players << revis
```

```
Where is Revis?
Is the data mutually exclusive?
What does the players table look like in SQL?
```

-----
Exercise
- Create the first model
- Create the 2nd model
- Give correct model accessibility
- Make migration for has_many belongs_to

### Final Thoughts
So far, this only provides us with the ORM for a relational app. The remaining steps are much more open ended to the scope of your application and the user experience you choose to develop.

The only new remaining feature that can really assist might be nested resources.

For reference, I've included a copy of a relationships app. Check out the routes.rb in this app.

```
Rails.application.routes.draw do
  root "teams#index"

  resources :teams do
    resources :players
  end

end
```

```
#===============
# Rake Routes
#===============
#           Prefix Verb   URI Pattern                                Controller#Action
#             root GET    /                                          teams#index
#     team_players GET    /teams/:team_id/players(.:format)          players#index
#                  POST   /teams/:team_id/players(.:format)          players#create
#  new_team_player GET    /teams/:team_id/players/new(.:format)      players#new
# edit_team_player GET    /teams/:team_id/players/:id/edit(.:format) players#edit
#      team_player GET    /teams/:team_id/players/:id(.:format)      players#show
#                  PATCH  /teams/:team_id/players/:id(.:format)      players#update
#                  PUT    /teams/:team_id/players/:id(.:format)      players#update
#                  DELETE /teams/:team_id/players/:id(.:format)      players#destroy
#            teams GET    /teams(.:format)                           teams#index
#                  POST   /teams(.:format)                           teams#create
#         new_team GET    /teams/new(.:format)                       teams#new
#        edit_team GET    /teams/:id/edit(.:format)                  teams#edit
#             team GET    /teams/:id(.:format)                       teams#show
#                  PATCH  /teams/:id(.:format)                       teams#update
#                  PUT    /teams/:id(.:format)                       teams#update
#                  DELETE /teams/:id(.:format)                       te
```

Comment.delete_all
Project.delete_all
User.delete_all

user1 = User.create(first_name: 'John', last_name: 'Bell', age: 30 ,email: 'jb@example.com')
user2 = User.create(first_name: 'Bryan', last_name: 'Mytko', age: 34 ,email: 'mytko@example.com')

p1 = Project.create(name: 'MTA Status', url:'http://www.mtastat.us', user_id: user1.id)
p2 = Project.create(name: 'Master Dynamic', url:'http://www.masterdynamic.com',user_id: user1.id)

p3 = Project.create(name: 'Homepage', url:'http://bryanmytko.com/',user_id: user2.id)
p4 = Project.create(name: 'Rubiks Cube Timer', url:'http://rubikscubetimer.com/',user_id: user2.id)
p5 = Project.create(name: 'GOT RegEx Game', url:'http://got.bryanmytko.com/',user_id: user2.id)

Comment.create(text: 'Screw the MTA', project_id: p1.id)
Comment.create(text: 'This is so useful!', project_id: p1.id)
Comment.create(text: 'Wow, these headphones are cool. I like the style', project_id: p2.id)
Comment.create(text: 'Super minimal, nice', project_id: p3.id)
Comment.create(text: 'This even works on mobile... awesome', project_id: p4.id)
Comment.create(text: 'I cant beat Bryan!!!!', project_id: p5.id)
Comment.create(text: 'John Snow is a RegEx master...', project_id: p5.id)
<center>![CRUD.png](CRUD.png)</center>
Congrats! We're making our first full CRUD App together. One of many...

Work with the people around you to keep a good pace. 

Use these docs to help with method override: https://github.com/expressjs/method-override#override-using-a-query-value

Here are native form elements: http://nativeformelements.com/ 

We will need to work in 5 files. Here is the file structure I created while building this app: 
```
forms
 ├─ app.js
 ├─ seeds.sql
 └─ views
     ├─ create.html
     ├─ index.html
     └─ single.html
```

---
<center>
** TIME TO GET STARTED **

![](https://media.giphy.com/media/3o6Zt3UVujj8KvFLAA/giphy.gif)</center>

1. Create a database. Create a schema/seed file. You should insert a few users into a 'users' table. The users have 3 columns, name, email and password. 

    Something like this: 

    ``` 
     id | name  |       email        |   password
    ----+-------+--------------------+--------------
      2 | jared | jared.murphy@ga.co | rush4life!
      3 | bryan | bryan.mytko@ga.co  | notfromjapan
      4 | tims  | tims.gardner@ga.co | clojure>all
      1 | john  | bell@ga.co         | semicolons?
    ```

2. After seeding a database, create an Express server. The server should have a connection to the database we just built. Include the proper NPM packages- express, mustache, pg-promise, body-parser, method-override....

3. Create a route on the server (/users) that will show all the users and their attributes on a html page. This is index.html

4. Create a route /users/:id that will display a single users data. This is single.html

    On this page, also build a form that contains the user's data inside the input boxes. Populate these inputs with their respective values. 
    
    Each attribute should have an input box of their own. Add a submit button- wrap the entire thing in a form tag. Give the input boxes name attributes so we can easily reference the data later. 

    Our form tag will look like this because of method override:

    ```
    <form method="POST" action="/users/{{id}}?_method=PUT">
    ```


5. Create a route (/create) It should display a form to create a user. This is create.html

    ```
    app.post('/users',function(req, res){ 

    })
    ```

    When we hit submit, it should make a POST to route (/user) and add that user to the database. 
    
    When the POST call is successful, redirect to /users so we can see all the users, including the new one. Google express redirects. 

6. Going back to our original view that shows all users... 

    Add a delete button next to each user. 
    
    When we click the button, an DELETE should be made to the delete route: 

    ```
    app.delete('/users/:id',function(req, res){ 

    })
    ```

    This  deletes the user from the database. (Look up the syntax for a DELETE.)

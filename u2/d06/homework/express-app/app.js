var express = require('express');
var app = express();
var port = process.env.port || 8080;

// app.get('/', function(req, res){
//   res.send('Hello World.')
// })

app.listen(port);
console.log('Server started on ' + port);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('index');
});


var npmPackages = {

    title: "Popular NPM Frameworks",
    text: "These are the most popular frameworks",

    packages: [
      {
        name: "Express",
        category: "Server-side Framework",
        img: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
      },
      {
        name: "Gulp",
        category: "Build System",
        img: "http://maxcdn.webappers.com/img/2014/01/gulp-js.jpg"
      },
      {
        name: "Mocha",
        category: "Testing Framework",
        img: "https://s3.amazonaws.com/dailyjs/images/posts/mocha-tests.png"
      },
      {
        name: "React",
        category: "Front-end Framework",
        img: "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
      },
      {
        name: "Passport",
        category: "Authentication Tool",
        img: "https://pbs.twimg.com/profile_images/599259952574693376/DMrPoJtc.png"
      },
      {
        name: "PG Promise",
        category: "Promises Interface for PostgeSQL Database",
        img: "https://securedb.co/wp-content/uploads/2015/07/worlds-most-advanced-open-source-database-securedb-encyrption-as-a-service.gif"
      }
    ]
}
app.get('/api/npmPackages', function(req, res) {
  var json_data = npmPackages;
  res.json(json_data);
});

// {
//     title: "languages",
//     text: "These are programming languages",

//     languages: [
//       {
//         name: "javascript",
//         category: "programming language",
//         img: "https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png"
//       },
//       {
//         name: "ruby",
//         category: "programming language",
//         img: "http://vignette2.wikia.nocookie.net/logopedia/images/c/c9/Ruby-language.png/revision/latest?cb=20130122221837"
//       },
//       {
//         name: "golang",
//         category: "programming language",
//         img: "http://www.unixstickers.com/image/cache/data/stickers/golang/golang.sh-600x600.png"
//       }
//       {
//         name: "elm",
//         category: "programming language",
//         img: "https://camo.githubusercontent.com/ed415a36e6e7df240aba341de4b384fb796b788d/68747470733a2f2f7062732e7477696d672e636f6d2f70726f66696c655f696d616765732f3434333535313532373330373731383635362f635a486873462d632e706e67"
//       }
//       {
//         name: "elixir",
//         category: "programming language",
//         img: "https://avatars2.githubusercontent.com/u/1481354?v=3&s=400"
//       }
//     ]
// }




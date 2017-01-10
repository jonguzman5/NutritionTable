var express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

candies = [
  {id: 1, name: "Chewing Gum" , color: "Red"},
  {id: 2, name: "Pez"         , color: "Green"},
  {id: 3, name: "Marshmallow" , color: "Pink"},
  {id: 4, name: "Candy Stick" , color: "Blue"}
]

router.get('/', function(req, res, next) {
  res.json(candies);
})

router.post('/', function(req, res) {
  // No database; we are just storing this stuff temporarily in an array.
  candies.push(req.body)
  debugger;
  res.json(req.body);
});

router.get('/:id', function(req,res){
  const candy = candies.filter(function(element){
    return element["id"] == req.params.id
  })[0];

  res.json(candy)
})

router.delete('/:id', function(req, res){
  for(i in candies){
    if(candies[i]["id"] == req.params.id){
      delete candies[i]
    }
  }

  res.json({message : 'deleted' });
});

router.put('/:id/edit', function(req, res) {
  for(i in candies){
    if(candies[i]["id"] == req.params.id){
      candies[i] = req.body
    }
  }

  res.format({
    json: function(){ res.json(req.body); }
  });
});

module.exports = router

var express = require('express');
var application = express();

var cors = require('cors');
var items = require('./data').posts;
application.use(cors());

application.get('/', function(req, res){
  res.json(items);
});

application.get('/posts/:id', function(req, res){
  res.json(items[req.params.id]);
});

application.patch('/posts/:id', function(req, res){
  var item = items[req.params.id];
  item.details.likes = item.details.likes + 1;
  res.json(item);
});

application.listen(3001, function() {
  console.log('Server has started on port 3001');
});

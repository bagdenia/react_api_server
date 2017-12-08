var express = require('express');
var application = express();

var cors = require('cors');

var items = require('./data').items;

application.use(cors());

application.get('/', function(req, res) {
  res.json(items);
});
  
application.get('/posts/:id', function(req, res) {
 res.json(items[req.params.id-1]);
});
 
application.listen(5001, function() {
  console.log('Server on 5001')
});

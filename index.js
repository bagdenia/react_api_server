var express = require('express');
var application = express();

var cors = require('cors');

var items = require('./data').items;

application.use(cors());

application.get('/', function (req, res) {
  var text = req.query.text;
  var matched = items.filter((entry) => entry.text.match(new RegExp(text, 'i')));
  res.json(matched);
});
  
application.get('/posts/:id', function (req, res) {
 res.json(items[req.params.id-1]);
});

application.post('/', function (req, res) {
    var item = items[req.query.id - 1];
    item.meta.likes += 1;
    res.send(item);
  });
 
application.listen(5001, function() {
  console.log('Server on 5001')
});

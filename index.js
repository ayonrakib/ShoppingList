const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + 'templates'));

const port = process.env.PORT || 10000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/templates/products/products.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
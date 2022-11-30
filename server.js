const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()

app.use('/static', express.static('build/static'));
app.use('/public', express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('app running at: http://localhost:8080');
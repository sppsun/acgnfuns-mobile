var express = require('express');
var path = require('path');
var app = express();

app.use(require('connect-history-api-fallback')());

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', function(req, res) {
  if (req.originalUrl.indexOf('favicon.ico')) {
    res.sendFile(path.resolve(__dirname, 'dist', 'favicon.ico'));
  }
});

app.listen(8090, function() {
  console.log('app run at :8090');
});

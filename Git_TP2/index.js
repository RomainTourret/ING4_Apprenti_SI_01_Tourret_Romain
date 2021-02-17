const express = require('express')
const app = express();
require('./handles')(app);

app.listen(8080, function() {
  console.log('server listening on 8080');
});
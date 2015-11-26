'use strict'
///// require express packages /////////////////////////////////////////////////
let express = require('express');
let app = express();
var logger = require('morgan');
app.use(logger('dev'));

// set port and static:
app.set('port', 3000);
app.use('/', express.static(__dirname + '/public'));

// my one dinky route
let dinky = require('./routes/api.js' )
app.use('/', dinky);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

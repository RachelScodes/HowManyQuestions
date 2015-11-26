'use strict'
///// require express packages /////////////////////////////////////////////////
let express = require('express');
let app = express();
var logger = require('morgan');
app.use(logger('dev'));

// set up all the things:
app.set('port', 3000);

app.use('/', express.static(__dirname + '/public'));

///// write routes below ///////////////////////////////////////////////////////
let routies = require('./routes/api.js' )
app.use('/', routies);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

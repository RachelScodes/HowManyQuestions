'use strict'
///// require
 /////////////////////////////////////////////////
let express = require('express');
let app = express();
var logger = require('morgan');
app.use(logger('dev'));

// set port and static:
app.set('port', 3000);
app.use('/', express.static(__dirname + '/public'));

// // my one dinky test route
// let dinky = require('./routes/api.js' )
// app.use('/test', dinky);

let checkQ = require('./routes/check.js')
app.use('/check',checkQ);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

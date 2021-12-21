'use strict';

const Express = require('express');
const router = require('./lib');
const cors = require("cors");
const app = Express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use('/api/', router);

app.get('/', function(req, res){
  res.redirect('/api');
});

app.listen(port, function () {
  console.log('Server started on port', port);
});

// server.js
// where your node app starts

// init project
var moment  = require('moment');
var express = require('express');
var ejs     = require('ejs');
var app     = express();
app.set('view engine', 'ejs')

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:query",function(req,res){
  
  
  
  var time=req.params.query;
  
  var toUnix= moment(time, "MMMM D, YYYY").format("X");
  toUnix =toUnix==="Invalid date"?"null":toUnix;
  var toNatural =moment(time).format("MMMM D, YYYY");
  toNatural =toNatural==="Invalid date"?"null":toNatural;
  
  
  res.render('results',{unix:toUnix,natural:toNatural});
});

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

var listener = app.listen(5555, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
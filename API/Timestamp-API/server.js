// server.js
// where your node app starts

// init project
var moment = require('moment');
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/:query",function(req,res){
  
  var outObje ={};
  
  
  
  var time=req.params.query;
  
  var toUnix= moment(time, "MMMM D, YYYY").format("X");
  toUnix =toUnix==="Invalid date"?"null":toUnix;
  var toNatural =moment(time).format("MMMM D, YYYY");
  toNatural =toNatural==="Invalid date"?"null":toNatural;
  outObje = {unix:toUnix,natural:toNatural}
  
  res.send(outObje);
});

// listen for requests :)
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

var listener = app.listen(5555, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
 //server.js
var express = require('express');
var app = express();
var fs = require('fs');

//bodyparser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

//set ejs engine
app.set('view engine', 'ejs');


//In order to get the CSS and other files working with the server
app.use(express.static('views'));

app.listen(8081);
console.log('8081 is the magic port');


//Defining root route
app.get('/', function(req, res) {
  res.render('pages/index', {
    new_heading: "Quote of the Day",
    new_paragraph: "I have a great relationship with the Mexican people",
    new_author: "Donald Trump"
  });
});

app.get('/jsondata', function(req, res) {
    var data = require('./guests.json');
    res.json(data);
});

//Guestbook Route

var data1 = require('./guests.json');


app.get('/guestbook', function(req, res) {
  res.render('pages/guestbook', data1);
});

//Route for a new message
app.get('/newmessage', function(req, res) {
  res.render('pages/newmessage');
});


//Method for Posting the form info to JSON
app.post('/newmessage', function (req, res) {
  var data = require('./guests.json');
  //Variables for the ID and new date which will appear iin /guestbook
  var last_elm = data.guestbook.length + 1;
  var newDate = new Date();



  data.guestbook.push({
    "id": last_elm,
    "username": req.body.username,
    "country": req.body.country,
    "message": req.body.message,
    "date": newDate.toUTCString()
  });

  var jsonStr = JSON.stringify(data);

  //Write
fs.writeFile('guests.json', jsonStr, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
//var back = "<a class='btn btn-primary btn-lg btn-block' id='successbtn' href='/'>Success! Now back to the Homepage</a>";
//res.send(back);
res.sendFile(__dirname + '/views/pages/success.html');
});

//404 Errors
app.get('*', function (req,res) {
  res.status(404).send("<h1>Can't find requested page</h1>");
});

var express = require("express"),
    mongoose = require('mongoose');

var app = express();
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');


var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
        Book.find(function(err, books){
            if(err)
                console.log(err);
            else
                res.json(books);
        });
    });

app.use('/api', bookRouter)

app.get('/', function(req, res) {
  res.send("Welcome to my API");
});

app.listen(port, function() {
  console.log("Running on PORT:" + port);
});

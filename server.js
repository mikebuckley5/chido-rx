//DEPENDENCIES
var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

//EXPRESS
var app = express();

//CONNECTION
var mongoUri = 'mongodb://localhost:27017/';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB!!');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

//ENDPOINTS
// app.get();
// app.post();
// app.put();
// app.delete();

//LISTEN
app.listen('8555');
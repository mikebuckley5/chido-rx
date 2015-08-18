//DEPENDENCIES
var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

//CONTROLLERS
var newOrderCtrl = require('./controllers/newOrderCtrl.js');

//EXPRESS
var app = express();

//CONNECTION
var mongoUri = 'mongodb://localhost:27017/chidorx';
mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB!!');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

//New Order Endpoints
app.get('/api/neworders', newOrderCtrl.find);
app.post('/api/neworders', newOrderCtrl.save);

//LISTEN
app.listen(8555);
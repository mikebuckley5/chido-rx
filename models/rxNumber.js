var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rxNumberSchema = ({
    rx_number: { type: Number }
});

module.exports = mongoose.model('rxnumber', rxNumberSchema);
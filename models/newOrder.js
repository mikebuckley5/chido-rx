var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newOrderSchema = new Schema({
    patient: { type: String, required: true },
    prescriber: { type: String, required: true },
    drug: { type: String, required: true },
    date_written: { type: String, required: true },
    directions: { type: String, required: true, maxlength: 300 },
    dispense_qty: { type: Number, required: true, min: 1 },
    total_qty: { type: Number, required: true, min: 0 },
    refills: { type: Number },
    day_supply: { type: Number, required: true, min: 1 }
});

module.exports = mongoose.model('neworder', newOrderSchema);

//For testing with Postman
/*
{
    "patient": "test",
    "prescriber": "test",
    "drug": "test",
    "date_written": "01/01/2000",
    "directions": "test",
    "dispense_qty": 5,
    "total_qty": 5,
    "refills": 5,
    "day_supply": 5
}
*/
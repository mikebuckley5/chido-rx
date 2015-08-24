var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var newOrderSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'patients', required: true },
    prescriber: { type: Schema.Types.ObjectId, ref: 'prescribers', required: true },
    drug: { type: Schema.Types.ObjectId, ref: 'drugs', required: true },
    date_written: { type: String, required: true },
    directions: { type: String, required: true, maxlength: 300 },
    dispense_qty: { type: Number, required: true, min: 1 },
    total_qty: { type: Number, required: true, min: 0 },
    refills: { type: Number },
    day_supply: { type: Number, required: true, min: 1 },
    rx_number: { type: Number, required: true }
});

module.exports = mongoose.model('orders', newOrderSchema);

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
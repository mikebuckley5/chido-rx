var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var newOrderSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'patients', required: true },
    prescriber: { type: Schema.Types.ObjectId, ref: 'prescribers', required: true },
    drug: { type: Schema.Types.ObjectId, ref: 'drugs', required: true },
    date_written: { type: Date, required: true },
    due: { type: Date, required: true },
    directions: { type: String, required: true, maxlength: 300 },
    dispense_qty: { type: Number, required: true, min: 1 },
    total_qty: { type: Number, required: true, min: 0 },
    refills: { type: Number },
    day_supply: { type: Number, required: true, min: 1 },
    rx_number: { type: Number, required: true },
    typed_by: { type: String, required: true },
    typed_at: { type: Date },
    filled: { type: Boolean, default: false },
    filled_at: { type: Date },
    filled_by: { type: String },
    finalcheck: { type: Boolean, default: false },
    finalcheck_at: { type: Date },
    finalcheck_by: { type: String }
});

module.exports = mongoose.model('orders', newOrderSchema);

//For testing with Postman
/*
{
    "patient": "55d4d20a47e4171e6949e37f",
    "prescriber": "55d63eb7ff2218a736955eaf",
    "drug": "55d6199bfcce565a1a3e9e71",
    "date_written": "01/01/2000",
    "directions": "test",
    "dispense_qty": 5,
    "total_qty": 5,
    "refills": 5,
    "day_supply": 5,
    "filled": false,
    "finalcheck": false
}
*/
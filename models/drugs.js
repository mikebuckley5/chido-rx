var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newDrugSchema = new Schema({
    name_and_strength: { type: String, required: true },
    form: { type: String, required: true },
    ndc: { type: Number, required: true },
    schedule: { type: String, required: true },
    package_size: { type: Number, required: true },
    measurement: { type: String },
    acquisition_price: { type: String, required: true },
    awp: { type: String, required: true }
});

module.exports = mongoose.model('drugs', newDrugSchema);
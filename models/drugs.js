var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newDrugSchema = new Schema({
    name_and_strength: { type: String, required: true },
    form: { type: String, required: true },
    ndc: { type: String, required: true },
    schedule: { type: String },
    package_size: { type: Number, required: true },
    measurement: { type: String },
    acquisition_price: { type: String, required: true },
    awp: { type: String, required: true },
    drug_image: { type: String, required: true }
});

module.exports = mongoose.model('drugs', newDrugSchema);

/*FOR TESTING WITH POSTMAN
{
    "name_and_strength": "Morphine 100mg/mL Solution",
    "form": "liquid",
    "ndc": "12345-6789-10",
    "schedule": "CII",
    "package_size": 240,
    "measurement": "mL",
    "acquisition_price": "95.00",
    "awp": "450.00",
    "drug_image": "",
}
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPrescriberSchema = new Schema({
    name: { type: String, required: true },
    office_address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: Number, required: true }
    },
    office_phone: { type: String, required: true },
    fax: { type: String, required: true },
    license: {
        npi: { type: Number, required: true },
        dea: { type: String }
    },
    prescriber_title: { type: String, required: true },
    notes: { type: String }
});

module.exports = mongoose.model('prescribers', newPrescriberSchema);

/*FOR TESTING WITH POSTMAN
{
    "name": "test",
    "office_address": {
        "street": "test",
        "city": "test",
        "state": "test",
        "zip": 12345
    },
    "office_phone": "test",
    "fax": "test",
    "license": {
        "npi": 1234567890,
        "dea": "test"
    },
    "prescriber_title": "Test"
}
*/
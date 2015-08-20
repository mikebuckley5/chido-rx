var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPatientSchema = new Schema({
    name: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: {type: Number, required: true }
    },
    date_of_birth: { type: String, required: true },
    social_security: { type: String, required: true },
    phone: { type: String },
    insurance: {
        plan_name: { type: String, required: true },
        plan_phone: { type: String },
        member_id: { type: String, required: true },
        relationship: { type: String, required: true },
        group: { type: String, required: true },
        bin: { type: Number, required: true },
        pcn: { type: String }
    },
    drug_allergies: { type: String },
    snap_cap: { type: String },
    notes: { type: String },
    patient_warnings: { type: String }
});

module.exports = mongoose.model('patients', newPatientSchema);

/*FOR TESTING WITH POSTMAN
{
    "name": "Test",
    "address": {
        "street": "Test",
        "city": "Test",
        "state": "Test",
        "zip": 12345
    },
    "date_of_birth": "Test",
    "social_security": 123456789,
    "phone": 1234567,
    "insurance": {
        "plan_name": "Test",
        "plan_phone": 1234567,
        "member_id": "Test",
        "relationship": "Test",
        "group": "Test",
        "bin": 123456,
        "pcn": "Test"
    },
    "drug_allergies": "Test",
    "snap_cap": "Test",
    "notes": "Test",
    "patient_warnings": "Test"
}
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newPatientSchema = {
    name: { type: String, required: true, maxlength: 45 },
    address: {
        street: { type: String, required: true, maxlength: 45 },
        city: { type: String, required: true, maxlength: 20 },
        state: { type: String, required: true },
        zip: {type: Number, required: true, max: 5}
    },
    date_of_birth: { type: String, required: true },
    social_security: { type: Number, required: true, max: 11 },
    phone: { type: Number, max:11 },
    insurance: {
        plan_name: { type: String, required: true, maxlength: 20},
        plan_phone: { type: Number, max:11 },
        member_id: { type: String, required: true, maxlength: 45 },
        relationship: { type: String, required: true },
        group: { type: String, required: true },
        bin: { type: Number, required: true, max: 6 },
        pcn: { type: String, maxlength: 20 }
    },
    drug_allergies: {},
    snap_cap: {},
    notes: {},
    patient_warnings: {}
};
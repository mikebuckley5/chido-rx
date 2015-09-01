var Patient = require('../models/patients');

module.exports = {
    find: function (req, res) {
        Patient.find(req.query)
            .populate('orders')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        var newPatient = new Patient(req.body);
        newPatient.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    },
    update: function (req, res) {
        Patient.findById(req.params.id, function (err, found) {

        })
    }
};
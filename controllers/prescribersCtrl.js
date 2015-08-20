var Prescriber = require('../models/prescribers');

module.exports = {
    find: function (req, res) {
        Prescriber.find(req.query)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        var newPrescriber = new Prescriber(req.body);
        newPrescriber.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    }
};

var Drug = require('../models/drugs');

module.exports = {
    find: function (req, res) {
        Drug.find(req.query)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        var newDrug = new Drug(req.body);
        newDrug.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    }
};
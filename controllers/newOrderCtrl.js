var NewOrder = require('../models/newOrder');

module.exports = {
    find: function (req, res) {
        NewOrder.find(req.query)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        var newOrders = new NewOrder(req.body);
        newOrders.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    }
};
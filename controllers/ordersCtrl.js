var Order = require('../models/orders');

module.exports = {
    find: function (req, res) {
        Order.find(req.query)
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        var newOrders = new Order(req.body);
        newOrders.save(function (err, answer) {
            if (err) {
                res.send(err);
            } else {
                res.send(answer);
            }
        });
    }
};
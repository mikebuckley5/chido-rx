var Order = require('../models/orders');
var RxNumber = require('../models/rxnumber');

module.exports = {
    find: function (req, res) {
        Order.find(req.query)
            .populate('patient prescriber drug')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    findById: function (req, res) {
        Order.findById(req.params.id)
            .populate('patient prescriber drug')
            .exec(function (err, answer) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(answer);
                }
            });
    },
    save: function (req, res) {
        RxNumber.findOne()
            .exec(function (err, answer) {
                if (answer) {
                    var answerId = answer._id;
                    var answerPlusOne = answer.rx_number + 1;
                    RxNumber.findByIdAndUpdate({ _id: answerId }, { rx_number: answerPlusOne }, function (error, updatedRx) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send(updatedRx);
                        }
                    });
                    req.body.rx_number = answer.rx_number + 1;
                    var newOrders = new Order(req.body);
                    newOrders.save(function (error, updatedOrder) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send(updatedOrder);
                        }
                    });
                } else {
                    var newRxNumObj = {
                        rx_number: 1000
                    };
                    var addNewRx = new RxNumber(newRxNumObj);
                    addNewRx.save(function (error, newRxNumber) {
                        if (error) {
                            res.send(error);
                        } else {
                            res.send(newRxNumber);
                        }
                    });
                    req.body.rx_number = 1000;
                    var newOrder = new Order(req.body);
                    newOrder.save(function (error, updatedOrder) {
                        if (err) {
                            res.send(error);
                        } else {
                            res.send(updatedOrder);
                        }
                    });
                }
            });
    }
};
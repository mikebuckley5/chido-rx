var Order = require('../models/orders');
var RxNumber = require('../models/rxnumber');
var Patient = require('../models/patients');

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
    update: function (req, res) {
        Order.findByIdAndUpdate(req.params.id, req.body)
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
                            req.body.rx_number = updatedRx.rx_number + 1;
                            var newOrders = new Order(req.body);
                            newOrders.save(function (error, updatedOrder) {
                                if (error) {
                                    res.send(error);
                                } else {
                                    var patientId = updatedOrder.patient;
                                    Patient.findById(patientId, function (err1, patient) {
                                        if (err1) {
                                            res.send(err1);
                                        } else {
                                            var patientOrders = patient.orders;
                                            patientOrders.push(updatedOrder._id);
                                            var patientOrdersUpdated = {
                                                orders: patientOrders
                                            };
                                            Patient.findByIdAndUpdate(patient._id, patientOrdersUpdated)
                                                .exec(function (error1, answer1) {
                                                    if (error1) {
                                                        res.send(error1);
                                                    } else {
                                                        res.send(answer1);
                                                    }
                                                });
                                        }
                                    });
                                }
                            });
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
                            req.body.rx_number = 1000;
                            var newOrder = new Order(req.body);
                            newOrder.save(function (error, updatedOrder) {
                                if (err) {
                                    res.send(error);
                                } else {
                                    res.send(updatedOrder);
                                }
                            });
                            res.send(newRxNumber);
                        }
                    });
                }
            });
    }
};
// var RxNumber = require('../models/rxNumber');

// module.exports = {
//     // find: function (req, res) {
//     //     RxNumber.find(req.query)
//     //         .exec(function (err, answer) {
//     //             if (err) {
//     //                 res.send(err);
//     //             } else {
//     //                 res.send(answer);
//     //             }
//     //         });
//     // },
//     // save: function (req, res) {
//     //     RxNumber.findOne({ rx_number: req.body.rx_number })
//     //         .exec(function (err, answer) {
//     //             if (answer) {
//     //                 var newRxNumber = req.body.rx_number + 1;
//     //                 RxNumber.findByIdAndUpdate(req.params.id, newRxNumber)
//     //                     .exec(function (err, answer) {
//     //                         if (err) {
//     //                             res.send(err);
//     //                         } else {
//     //                             res.send(answer);
//     //                         }
//     //                     });
//     //             }
//     //         })
//     // }
//     // update: function (req, res) {
//     //     RxNumber.findByIdAndUpdate(req.params.id, req.body)
//     //         .exec(function (err, answer) {
//     //             if (err) {
//     //                 res.send(err);
//     //             } else {
//     //                 res.send(answer);
//     //             }
//     //         });
//     // }
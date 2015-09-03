app.controller('patientProfileViewCtrl', function ($scope, patientSrvc, orderSrvc, $stateParams) {
    var patientId = $stateParams.id;
    (function getPatientProfile(id) {
        patientSrvc.getPatientById(id).then(function (response) {
            $scope.patientInfo = response;
            (function getPatientOrders(id) {
                orderSrvc.getOrdersByPatientId(id).then(function (response) {
                    console.log("Here are your patient's orders: ", response);
                    $scope.patientOrders = response;
                    for (var i = 0; i < $scope.patientOrders.length; i++) {
                        console.log("Here is the specific object: ", $scope.patientOrders[i]["finalcheck"]);
                        if ($scope.patientOrders[i]["finalcheck"] === true) {
                            $scope.patientOrders[i]["dateFilled"] = true;
                            $scope.patientOrders[i]["beingChecked"] = false;
                            $scope.patientOrders[i]["beingFilled"] = false;
                        } else if ($scope.patientOrders[i]["filled"] === true) {
                            $scope.patientOrders[i]["dateFilled"] = false;
                            $scope.patientOrders[i]["beingChecked"] = true;
                            $scope.patientOrders[i]["beingFilled"] = false;
                        } else {
                            $scope.patientOrders[i]["dateFilled"] = false;
                            $scope.patientOrders[i]["beingChecked"] = false;
                            $scope.patientOrders[i]["beingFilled"] = true;
                        }
                    }
                });
            }(patientId));
        });
    } (patientId));
});
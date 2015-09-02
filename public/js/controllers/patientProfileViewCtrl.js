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
                        if ($scope.patientOrders[i]["filled"] && $scope.patientOrders[i]["finalcheck"]) {
                            $scope.dateFilled = true;
                            $scope.beingChecked = false;
                            $scope.beingFilled = false;
                        } else if ($scope.patientOrders[i]["filled"]) {
                            $scope.dateFilled = false;
                            $scope.beingChecked = true;
                            $scope.beingFilled = false;
                        } else {
                            $scope.dateFilled = false;
                            $scope.beingChecked = false;
                            $scope.beingFilled = true;
                        }
                    }
                });
            }(patientId));
        });
    } (patientId));
});
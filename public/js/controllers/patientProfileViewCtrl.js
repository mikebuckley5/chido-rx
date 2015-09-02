app.controller('patientProfileViewCtrl', function ($scope, patientSrvc, orderSrvc, $stateParams) {
    var patientId = $stateParams.id;
    (function getPatientProfile(id) {
        patientSrvc.getPatientById(id).then(function (response) {
            $scope.patientInfo = response;
            (function getPatientOrders(id) {
                orderSrvc.getOrdersByPatientId(id).then(function (response) {
                    $scope.patientOrders = response;
                });
            }(patientId));
        });
    } (patientId));
});
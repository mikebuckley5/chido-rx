app.controller('fillQueueViewCtrl', function ($scope, $stateParams, orderSrvc) {
    var patientId = $stateParams.id;
    var getOrderView = function (id) {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.order = response;
            var snapCap = response.patient.snap_cap;
            if (snapCap === 'yes') {
                $scope.showSnapCap = true;
            } else {
                $scope.showSnapCap = false;
            }
        });
    };
    getOrderView(patientId);
});
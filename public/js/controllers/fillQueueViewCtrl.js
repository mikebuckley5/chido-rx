app.controller('fillQueueViewCtrl', function ($scope, $stateParams, orderSrvc) {
    var patientId = $stateParams.id;
    var getOrderView = function (id) {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.theOrder = response;
        });
    };
    getOrderView(patientId);
});
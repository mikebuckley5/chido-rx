app.controller('editOrderCtrl', function ($scope, $stateParams, $modalInstance, orderSrvc) {
    var orderId = $stateParams.id;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    var getOrder = function () {
        orderSrvc.getOrderById(orderId).then(function (response) {
            console.log(response);
            $scope.order = response;
        });
    };
    getOrder();

    $scope.updateTheOrder = function (order) {
        // console.log(data);
        orderSrvc.updateOrder(orderId, order).then(function (response) {
            // console.log(response);
            return response;
        });
    };

});
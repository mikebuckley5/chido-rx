app.controller('fillQueueCtrl', function ($scope, orderSrvc) {

    var getOrderList = function () {
        orderSrvc.getOrders().then(function (response) {
            $scope.orderList = response;
        });
    };
    getOrderList();

    
});
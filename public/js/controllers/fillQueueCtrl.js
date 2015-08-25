app.controller('fillQueueCtrl', function ($scope, orderSrvc) {

    var getOrderList = function () {
        orderSrvc.getOrders().then(function (response) {
            $scope.orderList = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i]["filled"] === false) {
                    $scope.orderList.push(response[i]);
                }
            }
            console.log($scope.orderList);
        });
    };
    getOrderList();
});
app.controller('finalVerificationCtrl', function ($scope, orderSrvc) {

    var getOrderList = function () {
        orderSrvc.getOrders().then(function (response) {
            $scope.filledOrderList = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i]["filled"] === true && response[i]["finalcheck"] === false) {
                    $scope.filledOrderList.push(response[i]);
                }
            }
        });
    };
    getOrderList();
});
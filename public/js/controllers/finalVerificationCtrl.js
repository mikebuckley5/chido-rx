app.controller('finalVerificationCtrl', function ($scope, orderSrvc) {
    //Get orders that have been marked as filled but not final checked
    (function () {
        orderSrvc.getOrders().then(function (response) {
            $scope.filledOrderList = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i]["filled"] === true && response[i]["finalcheck"] === false) {
                    $scope.filledOrderList.push(response[i]);
                }
            }
        });
    }());
});
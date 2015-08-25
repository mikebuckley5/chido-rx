app.controller('fillQueueViewCtrl', function ($scope, $stateParams, orderSrvc) {
    var orderId = $stateParams.id;
    var getOrderView = function (id) {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.order = response;
            var snapCap = response.patient.snap_cap;
            if (snapCap === 'yes') {
                $scope.showSnapCap = true;
            } else {
                $scope.showSnapCap = false;
            }
            $scope.verifyField = true;
            $scope.verify = function (typedNdc) {
                if (response.drug.ndc === typedNdc) {
                    $scope.verifiedTrue = true;
                    $scope.verifyField = false;
                    $scope.verifiedFalse = false;
                } else {
                    $scope.verifiedFalse = true;
                    $scope.verifiedTrue = false;
                }
                $scope.viewInitials = true;
                $scope.initialed = function (initials) {
                    if (initials.length > 1) {
                        $scope.initialsTyped = true;
                        $scope.viewInitials = false;
                    } else {
                        $scope.initialWarning = true;
                    }
                };
            };
        });
    };
    getOrderView(orderId);
});
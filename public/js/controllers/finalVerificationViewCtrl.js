app.controller('finalVerificationViewCtrl', function ($scope, $stateParams, orderSrvc) {
    var id = $stateParams.id;
    //Get the specific order that will be final checked
    (function () {
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
            };
        });
    } ());
});
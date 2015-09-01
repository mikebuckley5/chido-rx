app.controller('finalVerificationViewCtrl', function ($scope, $state, $modal, $stateParams, orderSrvc, patientSrvc) {
    var id = $stateParams.id;
    //Get the specific order that will be final checked
    (function () {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.order = response;
            //Check to see if patient needs snap cap & alert
            var snapCap = response.patient.snap_cap;
            if (snapCap === 'yes') {
                $scope.showSnapCap = true;
            } else {
                $scope.showSnapCap = false;
            }
            //NDC verification fields & testing
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
            //Initials field
            $scope.viewInitials = true;
            $scope.initialed = function (initials) {
                if (initials.length > 1) {
                    $scope.initialsTyped = true;
                    $scope.viewInitials = false;
                } else {
                    $scope.initialWarning = true;
                }
            };
            //Update order info in database once verified
            $scope.updateOrder = function (order) {
                order.finalcheck_at = new Date();
                order.finalcheck = true;
                orderSrvc.updateOrder(id, order).then(function (response) {
                    $state.reload('finalverification');
                    return response;
                });
            };
        });
    } ());
    ////////////////////////
    /////////MODAL/////////
    //////////////////////

    $scope.editOrder = function () {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/editOrderTmpl.html',
            controller: 'editOrderCtrl',
            size: 'lg'
        });
    };
});
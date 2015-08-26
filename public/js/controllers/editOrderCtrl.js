app.controller('editOrderCtrl', function ($scope, $state, $stateParams, $modalInstance, orderSrvc, prescriberSrvc, drugSrvc) {
    var orderId = $stateParams.id;

    $scope.ok = function (order) {
        $scope.prescriberId = function (prescriber) {
            $scope.drugId = function (drug) {
                order.prescriber = prescriber._id;
                order.drug = drug._id;
                orderSrvc.updateOrder(orderId, order).then(function (response) {
                    return response;
                });
                $state.reload('fillqueueview');
                $modalInstance.close();
            };
        };
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

    /////////////////////////////////
    //////////FOR FILTER////////////
    ///////////////////////////////

    //GET LIST OF PRESCRIBERS FOR TYPEAHEAD FILTER
    var getPrescriber = function () {
        prescriberSrvc.getPrescribers().then(function (response) {
            $scope.prescriberNames = response;
        });
    };
    getPrescriber();

    //GET LIST OF DRUGS FOR TYPEAHEAD FILTER
    var getDrug = function () {
        drugSrvc.getDrugs().then(function (response) {
            $scope.drugs = response;
        });
    };
    getDrug();

});
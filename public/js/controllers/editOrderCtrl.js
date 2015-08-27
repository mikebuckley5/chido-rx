app.controller('editOrderCtrl', function ($scope, $state, $stateParams, $modalInstance, orderSrvc, prescriberSrvc, drugSrvc) {
    var id = $stateParams.id;
    //Object which will be submitted with edits made on view
    $scope.editedOrder = {
        drug: "",
        prescriber: "",
        directions: "",
        dispense_qty: 0,
        total_qty: 0,
        day_supply: 0,
        refills: 0
    };
    //Get current order and assign values to object in case of changes
    (function () {
        orderSrvc.getOrderById(id).then(function (response) {
            $scope.orderResponse = response;
            $scope.editedOrder.drug = response.drug;
            $scope.editedOrder.prescriber = response.prescriber;
            $scope.editedOrder.directions = response.directions;
            $scope.editedOrder.dispense_qty = response.dispense_qty;
            $scope.editedOrder.total_qty = response.total_qty;
            $scope.editedOrder.day_supply = response.day_supply;
            $scope.editedOrder.refills = response.refills;
        });
    } ());
    //If drug is changed the new ID will be saved to object
    $scope.drugId = function (drug) {
        $scope.editedOrder.drug = drug._id;
    };
    //If prescriber is changed the new ID will be saved to object
    $scope.prescriberId = function (prescriber) {
        $scope.editedOrder.prescriber = prescriber._id;
    };
    //Once edits have been made they will update the order in the orders collection with changes
    $scope.ok = function (editedOrder) {
        orderSrvc.updateOrder(id, editedOrder).then(function (response) {
            console.log(response);
            return response;
        });
        $modalInstance.close();
        $state.reload('fillqueueview');
    };
    //User can cancel changes
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    /////////////////////////////////
    //////////FOR FILTER////////////
    ///////////////////////////////

    //GET LIST OF PRESCRIBERS FOR TYPEAHEAD FILTER
    (function () {
        prescriberSrvc.getPrescribers().then(function (response) {
            $scope.prescriberNames = response;
        });
    } ());

    //GET LIST OF DRUGS FOR TYPEAHEAD FILTER
    (function () {
        drugSrvc.getDrugs().then(function (response) {
            $scope.drugs = response;
        });
    } ());

});
app.controller('newOrderCtrl', function ($scope, $modal, newOrderSrvc, filterSrvc) {

/////////////////////////////////
////////////MODALS//////////////
///////////////////////////////

    //NEW PATIENT MODAL
    $scope.openNewPatient = function () {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/newPatientTmpl.html',
            controller: 'newPatientCtrl',
            size: 'lg'
        });
    };

    //NEW PRESCRIBER MODAL
    $scope.openNewPrescriber = function () {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/newPrescriberTmpl.html',
            controller: 'newPrescriberCtrl',
            size: 'lg'
        });
    };
    //NEW DRUG MODAL
    $scope.openNewDrug = function () {
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/newDrugTmpl.html',
            controller: 'newDrugCtrl',
            size: 'lg'
        });
    };

////////////////////////////////
///////////////////////////////
//////////////////////////////

    //ADD NEW ORDER
    $scope.addNewOrder = function (data) {
        console.log(data);
        newOrderSrvc.createNewOrder(data).then(function (response) {
            // console.log(response);
            $scope.order = "";
            $scope.alert = {
                type: 'success',
                message: 'Order Added!'
            };
        });
    };

    //GET LIST OF PATIENTS FOR TYPEAHEAD FILTER
    var getPatient = function () {
        filterSrvc.getPatients().then(function (response) {
            console.log(response);
            $scope.names = response;
        });
    };
    getPatient();

});
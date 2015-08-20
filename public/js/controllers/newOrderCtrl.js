app.controller('newOrderCtrl', function ($scope, $modal, orderSrvc, prescriberSrvc, drugSrvc, patientSrvc) {

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
        orderSrvc.createNewOrder(data).then(function (response) {
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
        patientSrvc.getPatients().then(function (response) {
            console.log(response);
            $scope.patientNames = response;
        });
    };
    getPatient();

    //GET LIST OF PRESCRIBERS FOR TYPEAHEAD FILTER
    var getPrescriber = function () {
        prescriberSrvc.getPrescribers().then(function (response) {
            console.log(response);
            $scope.prescriberNames = response;
        });
    };
    getPrescriber();

    //GET LIST OF DRUGS FOR TYPEAHEAD FILTER
    var getDrug = function () {
        drugSrvc.getDrugs().then(function (response) {
            console.log(response);
            $scope.drugNames = response;
        });
    };
    getDrug();

});
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
    //ORDER ADDED MODAL
    $scope.orderAddedAlert = function () {
        var modalInstance = $modal.open({
            animation: false,
            templateUrl: '../templates/orderAddedTmpl.html',
            controller: function ($scope, $modalInstance) {
                setTimeout(function () {
                    $modalInstance.close();
                }, 3000);
            },
            size: 'sm'
        });
    };

    /////////////////////////////////
    ////////ADDING NEW ORDER////////
    ///////////////////////////////

    //ADD NEW ORDER

    $scope.patientId = function (patient) {
        $scope.prescriberId = function (prescriber) {
            $scope.drugId = function (drug) {
                $scope.addNewOrder = function (order) {
                    order.patient = patient._id;
                    order.prescriber = prescriber._id;
                    order.drug = drug._id;
                    console.log(order);
                    orderSrvc.createNewOrder(order).then(function (response) {
                        $scope.patient = "";
                        $scope.prescriber = "";
                        $scope.drug = "";
                        $scope.order = "";
                    });
                };
            };
        };
    };


    /////////////////////////////////
    //////////FOR FILTER////////////
    ///////////////////////////////

    //GET LIST OF PATIENTS FOR TYPEAHEAD FILTER
    var getPatient = function () {
        patientSrvc.getPatients().then(function (response) {
            $scope.patientNames = response;
        });
    };
    getPatient();

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
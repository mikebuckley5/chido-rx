app.controller('newOrderCtrl', function ($scope, $modal, orderSrvc, prescriberSrvc, drugSrvc, patientSrvc, rxNumberSrvc) {

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

    /////////////////////////////////
    ////////ADDING NEW ORDER////////
    ///////////////////////////////

    //ADD NEW ORDER
    // $scope.addNewOrder = function (data) {
    //     var rxNumber = 0;
    //     rxNumberSrvc.getRxNumber().then(function (response) {
    //         console.log(response);
    //         if (response[rx_number] === undefined) {
    //             console.log("hit if!");
    //             rxNumber = 1000;
    //             var newRxNum = {
    //                 rx_number: rxNumber
    //             };
    //             rxNumberSrvc.createFirstRx(newRxNum).then(function (response) {
    //                 return response;
    //             });
    //             data.rx_number = rxNumber;
    //             orderSrvc.createNewOrder(data).then(function (response) {
    //                 $scope.order = "";
    //                 $scope.alert = {
    //                     type: 'success',
    //                     message: 'Order Added!'
    //                 };
    //             });
    //         } else {
    //             console.log("hit else!");
    //             var rxNumObj = response[0];
    //             rxNumber = rxNumObj.rx_number + 1;
    //             var newRxObj = {
    //                 rx_number: rxNumber
    //             };
    //             rxNumberSrvc.updateRxNumber(rxNumObj._id, newRxObj).then(function (response) {
    //                 return response;
    //             });
    //             data.rx_number = rxNumber;
    //             orderSrvc.createNewOrder(data).then(function (response) {
    //                 $scope.order = "";
    //                 $scope.alert = {
    //                     type: 'success',
    //                     message: 'Order Added!'
    //                 };
    //             });
    //         }
    //     });
    // };

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
            $scope.drugNames = response;
        });
    };
    getDrug();

});
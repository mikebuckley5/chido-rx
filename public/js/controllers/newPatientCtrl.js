app.controller('newPatientCtrl', function ($scope, $state, $modalInstance, patientSrvc) {
    //When user clicks submit will add new patient to collection
    $scope.ok = function (patient) {
        patientSrvc.addPatient(patient).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };
    //User can cancel adding a new patient
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
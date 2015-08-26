app.controller('newPatientCtrl', function ($scope, $state, $modalInstance, patientSrvc) {

    $scope.ok = function (patient) {
        patientSrvc.addPatient(patient).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
});
app.controller('newPatientCtrl', function ($scope, $modalInstance, newPatientSrvc) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addNewPatient = function (data) {
        newPatientSrvc.addPatient(data).then(function (response) {
            return response;
        });
    };
});
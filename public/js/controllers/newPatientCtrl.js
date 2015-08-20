app.controller('newPatientCtrl', function ($scope, $modalInstance, newPatientSrvc) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addNewPatient = function (data) {
        // console.log(data);
        newPatientSrvc.addPatient(data).then(function (response) {
            // console.log(response);
            return response;
        });
    };

});
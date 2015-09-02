app.controller('patientProfileCtrl', function ($scope, patientSrvc) {
    (function () {
        patientSrvc.getPatients().then(function (response) {
            $scope.patientNames = response;
        });
    } ());

    $scope.patientProfile = function (patient) {
        console.log(patient._id);
        $scope.patientId = patient._id;
    };
});
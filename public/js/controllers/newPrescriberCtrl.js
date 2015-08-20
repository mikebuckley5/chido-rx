app.controller('newPrescriberCtrl', function($scope, $modalInstance, prescriberSrvc) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addNewPrescriber = function (data) {
        // console.log(data);
        prescriberSrvc.addPrescriber(data).then(function (response) {
            // console.log(response);
            return response;
        });
    };
});
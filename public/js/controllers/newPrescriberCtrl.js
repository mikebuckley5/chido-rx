app.controller('newPrescriberCtrl', function($scope, $modalInstance, newPrescriberSrvc) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addNewPrescriber = function (data) {
        // console.log(data);
        newPrescriberSrvc.addPrescriber(data).then(function (response) {
            // console.log(response);
            return response;
        });
    };
});
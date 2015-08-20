app.controller('newDrugCtrl', function ($scope, $modalInstance, newDrugSrvc) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.addNewDrug = function (data) {
        // console.log(data);
        newDrugSrvc.addDrug(data).then(function (response) {
            // console.log(response);
            return response;
        });
    };

});
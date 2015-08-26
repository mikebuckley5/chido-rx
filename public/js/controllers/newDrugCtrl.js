app.controller('newDrugCtrl', function ($scope, $state, $modalInstance, drugSrvc) {

    $scope.ok = function (drug) {
        drugSrvc.addDrug(drug).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
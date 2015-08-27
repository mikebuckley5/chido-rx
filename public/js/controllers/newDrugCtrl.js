app.controller('newDrugCtrl', function ($scope, $state, $modalInstance, drugSrvc) {
    //When user clicks submit will add new drug to collection
    $scope.ok = function (drug) {
        drugSrvc.addDrug(drug).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };
    //User can cancel adding new drug
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
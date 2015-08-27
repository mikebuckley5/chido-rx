app.controller('newPrescriberCtrl', function($scope, $state, $modalInstance, prescriberSrvc) {
    //When user clicks submit will add new prescriber to collection
    $scope.ok = function (prescriber) {
        prescriberSrvc.addPrescriber(prescriber).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };
    //User can cancel adding new prescriber
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});
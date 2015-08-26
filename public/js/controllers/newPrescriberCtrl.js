app.controller('newPrescriberCtrl', function($scope, $state, $modalInstance, prescriberSrvc) {

    $scope.ok = function (prescriber) {
        prescriberSrvc.addPrescriber(prescriber).then(function (response) {
            return response;
        });
        $state.reload('neworder');
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
});
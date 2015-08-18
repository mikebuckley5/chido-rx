app.controller('newOrderCtrl', function ($scope, $modal, newOrderSrvc) {
    //MODAL
    $scope.open = function () {

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: '../templates/newPatientTmpl.html',
            controller: function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close();
                };
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            size: 'lg'
        });
    };

    //ADD NEW ORDER
    $scope.addNewOrder = function (data) {
        console.log(data);
        newOrderSrvc.createNewOrder(data).then(function (response) {
            console.log(response);
            $scope.order = "";
            $scope.alert = {
                type: 'success',
                message: 'Order Added!'
            };
        });
    };


});
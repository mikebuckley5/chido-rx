app.service('newOrderSrvc', function ($http) {

    this.createNewOrder = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/orders',
            data: data
        }).then(function (response) {
                return response;
            });
    };
});
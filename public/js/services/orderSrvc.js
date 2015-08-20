app.service('orderSrvc', function ($http) {

    this.createNewOrder = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/orders',
            data: data
        }).then(function (response) {
                return response;
            });
    };

    this.getOrders = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/orders'
        })
            .then(function (response) {
                return response.data;
            });
    };
});
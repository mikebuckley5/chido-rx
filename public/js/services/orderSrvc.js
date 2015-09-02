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

    this.getOrderById = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/orders/' + id
        })
            .then(function (response) {
                return response.data;
            });
    };
    this.getOrdersByPatientId = function (id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/orders/bypatient/' + id
        })
            .then(function (response) {
                console.log("Here are your patient's orders: ", response.data);
                return response.data;
            });
    };
    this.updateOrder = function (id, data) {
        return $http({
            method: 'PUT',
            url: 'http://localhost:8555/api/orders/' + id,
            data: data
        })
            .then(function (response) {
                return response.data;
            });
    };
});
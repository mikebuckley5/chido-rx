app.service('newOrderSrvc', function ($http) {
    this.createNewOrder = function (data) {
        return $http({
            method: 'POST',
            url: '',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };
});
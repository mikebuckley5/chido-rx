app.service('newPrescriberSrvc', function ($http) {
    this.addPrescriber = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/prescribers',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };
});
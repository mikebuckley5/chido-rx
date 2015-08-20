app.service('prescriberSrvc', function ($http) {
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

    this.getPrescribers = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/prescribers'
        })
            .then(function (response) {
                return response.data;
            });
    };
});
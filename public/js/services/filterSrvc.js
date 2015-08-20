app.service('filterSrvc', function ($http) {

    this.getPatients = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/patients'
        })
            .then(function (response) {
                return response.data;
            });
    };

});
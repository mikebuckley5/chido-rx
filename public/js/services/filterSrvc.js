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

    this.getPrescribers = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/prescribers'
        })
            .then(function (response) {
                return response.data;
            });
    };

    this.getDrugs = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8555/api/drugs'
        })
            .then(function (response) {
                return response.data;
            });
    };

});
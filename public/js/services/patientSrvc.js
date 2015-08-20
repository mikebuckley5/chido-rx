app.service('patientSrvc', function ($http) {

    this.addPatient = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/patients',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };

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
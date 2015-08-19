app.service('newPatientSrvc', function ($http) {

    this.addPatient = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/newpatient',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };
});
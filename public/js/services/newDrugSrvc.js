app.service('newDrugSrvc', function ($http) {
    this.addDrug = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/drugs',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };
});
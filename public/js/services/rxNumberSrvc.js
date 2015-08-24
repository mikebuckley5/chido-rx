app.service('rxNumberSrvc', function ($http) {
    // this.getRxNumber = function () {
    //     return $http({
    //         method: 'GET',
    //         url: 'http://localhost:8555/api/rxnumber'
    //     })
    //         .then(function (response) {
    //             return response.data;
    //         });
    // };

    this.createFirstRx = function (data) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8555/api/rxnumber',
            data: data
        })
            .then(function (response) {
                return response;
            });
    };

//     this.updateRxNumber = function (id, data) {
//         return $http({
//             method: 'PUT',
//             url: 'http://localhost:8555/api/rxnumber/' + id,
//             data: data
//         })
//             .then(function (response) {
//                 return response;
//             });
//     };
});
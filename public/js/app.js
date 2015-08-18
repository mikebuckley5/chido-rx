var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider
        .state('landing', {
            url: '/landing',
            templateUrl: '../templates/landingTmpl.html',
            // controller: landingCtrl
        })
        .state('neworder', {
            url: '/neworder',
            templateUrl: '../templates/newOrderTmpl.html',
            controller: 'newOrderCtrl'
        })
        .state('fillqueue', {
            url: '/fillqueue',
            templateUrl: '../templates/fillQueueTmpl.html',
            // controller: 'fillQueueCtrl'
        })
            .state('fillqueueview', {
                parent: 'fillqueue',
                url: '/view',
                templateUrl: '../templates/fillQueueViewTmpl.html'
                // controller: ''
            })
        .state('finalverification', {
            url: '/finalverification',
            templateUrl: '../templates/finalVerificationTmpl.html',
            // controller: 'finalVerificationCtrl'
        });

    // $locationProvider.html5Mode(true);
});
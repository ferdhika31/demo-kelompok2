var kelompok2App = angular.module('html5demo', [
    'ngRoute',
    'html5demo.Controllers'
]);

kelompok2App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'html5demo.Controllers.home'
        }).
        when('/svg', {
            templateUrl: 'partials/svg.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        when('/geo', {
            templateUrl: 'partials/geolocation.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        when('/jquery', {
            templateUrl: 'partials/jquery.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        when('/selectors', {
            templateUrl: 'partials/selectors.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        when('/workers', {
            templateUrl: 'partials/workers.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        when('/video', {
            templateUrl: 'partials/video.html',
            controller: 'html5demo.Controllers.Empty'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
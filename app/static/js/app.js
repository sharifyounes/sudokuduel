let app = angular.module("App", [
    "ngRoute",
]);

const TEMPLATES = {
    sudoku: {
        home: "<game></game>",
    },
};

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            title: "Sudoku",
            template: TEMPLATES.sudoku.home,
        });

    $locationProvider.html5Mode(true);
});

app.controller("Controller", function(
    $rootScope, $scope, $window, $timeout, $location,
) {

    let ctrl = this;

});

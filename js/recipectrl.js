var module = angular.module("recipeApp", ["ui.router"]);
module.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/home.html",
        controller: "homeCtrl"}).state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "loginCtrl"
    });
});
module.controller("homeCtrl", function ($scope, $rootScope, sportService) {
    var promise = recipeService.getRecipes();
    promise.then(function (data) {
        $scope.table = data;
    });
});
module.controller("loginCtrl", function ($scope, $rootScope, recipeService) {
    $scope.loggIn = function () {
        console.log("du komer till login");
        recipeService.loggIn($scope.username, $scope.password);
    };
});
var module = angular.module("recipeApp", ["ui.router"]);
module.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/home.html",
        controller: "homeCtrl"}).state("recipe", {
        url: "/{id}",
        templateUrl: "templates/recipe.html",
        controller: "recipeCtrl"
    }).state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "loginCtrl"
    });
});
module.controller("homeCtrl", function ($scope, $rootScope, recipeService) {
    var promise = recipeService.getRecipes();
    promise.then(function (data) {
        $scope.recipes = data.data;
        console.log(data.data);
    });
     $scope.fillRecipe = recipeService.fillRecipe();
});
module.controller("loginCtrl", function ($scope, $rootScope, recipeService) {
    $scope.loggIn = function () {
        console.log("du komer till login");
        recipeService.loggIn($scope.username, $scope.password);
    };
});
module.controller("recipeCtrl", function ($scope, recipeService) {
        var promise = recipeService.getRecipeIngs();
    promise.then(function (data) {
    var promise = recipeService.getRecipes();
    promise.then(function (data) {
        $scope.recipe = data.data;
        console.log(data.data);

    });
});
});

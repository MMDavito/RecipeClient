var module = angular.module("recipeApp", ["ui.router"]);
module.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/home.html",
        controller: "homeCtrl"}).state("recipe", {
        url: "/recipe/",
        templateUrl: "templates/recipe.html",
        controller: "recipeCtrl"
    }).state("addrecipe", {
        url: "/addrecipe",
        templateUrl: "templates/addrecipe.html",
        controller: "addrecipeCtrl"
    }).state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "loginCtrl"
    });
});
module.controller("homeCtrl", function ($scope, $rootScope, recipeService, $window, $state) {
    var promise = recipeService.getRecipes();
    promise.then(function (data) {
        $scope.recipes = data.data;
        console.log(data);
    });
    $scope.fillRecipe = function (id) {
        $rootScope.id = id;
        console.log("WindoWWW " + $window.location.href);
        $state.transitionTo('recipe');
    };
});
module.controller("loginCtrl", function ($scope, $rootScope, recipeService) {
    $scope.loggIn = function () {
        console.log("du komer till login");
        /*var promise = */recipeService.loggIn($scope.username, $scope.password);

        /*promise.then(function (data) {
         console.log(data.data);
         });*/
    };
});
module.controller("recipeCtrl", function ($scope, $rootScope, recipeService) {
    console.log("recipeCTRL" + $rootScope.id);
    var promise = recipeService.getRecipeIngs($rootScope.id);
    promise.then(function (data) {
        console.log(data.data);
        $scope.recipe = data.data;
        console.log($scope.recipe);
        console.log("efterSkiten");
    });
});
module.controller("addrecipeCtrl", function ($scope, $rootScope, recipeService) {
    var promise = recipeService.getIngs();
    promise.then(function (data) {
        $scope.ingredients = data.data;
        console.log($scope.ingredients);
        console.log("efterSkiten");
    });
    $scope.loggIn = function () {
        console.log("du komer till login");
        recipeService.loggIn($scope.username, $scope.password);
    };
    $scope.addIng = function () {
        console.log("I see that you want to add recipe");
        if(!$scope.modalIngName){
            return;
        }if(!$scope.modalIngInfo){
            $scope.modalIngInfo = "";
        }
        
        console.log($scope.modalIngName, $scope.modalIngInfo);
        recipeService.addIng($scope.modalIngName, $scope.modalIngInfo);
    };
});
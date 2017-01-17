module.service("recipeService", function ($q, $http, $rootScope) {
    this.getRecipes = function () {
        var deffer = $q.defer();
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/recipes";
        $http.get(url).then(function (data) {
            deffer.resolve(data);
        });
        return deffer.promise;
    };
    this.loggIn = function (username, password) {

        var url = "http://localhost:8080/RecipeServer.0.1/webresources/login";
        var auth = "Basic " + window.btoa(username + ":" + password);

        console.log(auth);

        $http({
            url: url,
            method: "POST",
            headers: {'Authorization': auth}
        }).then(function (data, status) {
            console.log("data "+data);
            console.log("status "+status);
            console.log("loggedin");
            $rootScope.isLoggedIn = true;
            $rootScope.user = username;
            $rootScope.pass = password;
        });
    };
    this.fillRecipe = function (id) {
        console.log(id);    
};
});
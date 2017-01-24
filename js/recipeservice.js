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
        var deffer = $q.defer();
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/login";
        var auth = "Basic " + window.btoa(username + ":" + password);

        console.log(auth);

        $http({
            url: url,
            method: "POST",
            headers: {'Authorization': auth}
        }).then(function (data, status) {
            var auth = (data.data);
            console.log(auth['access_level']);

            var controll = auth['access_level'];
            if (controll === 1) {
                $rootScope.isLoggedIn = true;
                $rootScope.user = username;
                $rootScope.pass = password;
                $rootScope.isAdmin = false;

            } else if (controll === 2) {
                $rootScope.isLoggedIn = true;
                $rootScope.user = username;
                $rootScope.pass = password;
                $rootScope.isAdmin = true;
            }
        });
    };
    this.fillRecipe = function (id) {
        console.log("id of filler " + id);
        return "blehe";
    };
    this.getRecipeIngs = function (id) {
        console.log("you should get ings of id " + id);
        var deffer = $q.defer();
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/recipe/" + id;
        console.log(url);
        $http.get(url).then(function (data) {
            deffer.resolve(data);
        });
        return deffer.promise;
    };
    this.getIngs = function () {
        console.log("you should get all ings in ing-table");
        var deffer = $q.defer();
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/ingredients";
        console.log(url);
        $http.get(url).then(function (data) {
            deffer.resolve(data);
        });
        return deffer.promise;
    };
    this.getCats = function () {
        console.log("trying to get cats.");
        var deffer = $q.defer();
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/categories";
        console.log(url);
        $http.get(url).then(function (data) {
            deffer.resolve(data);
        });
        return deffer.promise;
    };
    this.addIng = function (name, info) {
        var data = {
            name: name,
            information: info
        };
        console.log(data);
        var url = "http://localhost:8080/RecipeServer.0.1/webresources/ingredient";
        var auth = "Basic " + window.btoa($rootScope.user + ":" + $rootScope.pass);
        console.log(auth);
        $http({
            url: url,
            method: "POST",
            data: data,
            headers: {'Authorization': auth}}).then(function (data, status) {
            console.log(data);
            console.log(status);
            console.log("Fixade Att lägga in ing");
        });
    };
    this.listIngs = function (list, ing, amount) {
        list.push(ing + " " + amount + "-");
        return list;
    };
});
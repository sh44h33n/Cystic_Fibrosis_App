var app = angular.module('CysticFibrosis');

app.factory('DataSource', ['$http', function($http) {
    return {
        get: function(fileName, callback) {
            $http.get(fileName).
            success(function(data, status) {
                callback(data);
            });
        }
    };






    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/foods.json", function(data) {
        var foodData = data;
        var location = "./src/images/foods/";




        return {
            getfoods: function() {
                return foodData;
            },
            getLoc: function() {
                return location;
            }
        }



    });






}]);
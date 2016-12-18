/*
angular.module('CysticFibrosis').factory('DataSource', ['$http', function($http) {
    return {
        get: function(fileName, callback) {
            $http.get(fileName).
            success(function(data, status) {
                callback(data);
            });
        }
    };
}]);
*/

angular.module('CysticFibrosis').controller('homeController', ['$scope', function($scope, DataSource) {

    $scope.myInterval = 2000;

    var IMAGE_WIDTH = 100;
    $scope.IMAGE_LOCATION = "./src/images/slides/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/slide.json", function(data) {
        $scope.slides = data;

    });



}]);
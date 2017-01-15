var app = angular.module('CysticFibrosis');


app.controller('dietController', function($scope, DataSource) {
    var ctrl = this;
    //this controlls adding removing foods to dietlog


    $scope.IMAGE_LOCATION = "./src/images/foods/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/foods.json", function(fooddata) {
        $scope.slides = fooddata;

    });








});
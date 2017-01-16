var app = angular.module('CysticFibrosis');
app.controller('dietController', function($scope, appService, DataSource) {
    var ctrl = this;
    //this controlls adding removing foods to dietlog


    $scope.IMAGE_LOCATION = "./src/images/foods/";

    // Retrieving and creating food array using json files
    DataSource.get("./src/JsonImageFiles/foods.json", function(fooddata) {
        $scope.slides = fooddata;


        var foods = appService.getnewFoods(); //referencing from appService
        //alert(foods.length);


        //$scope.newFood = foods; //scoping foods returned from appServices






    });








});
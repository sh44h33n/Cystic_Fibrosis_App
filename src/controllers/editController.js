var app = angular.module('CysticFibrosis');
app.controller('editController', function($scope, DataSource, $routeParams) {
    var ctrl = this;
    //this controlls adding removing foods to dietlog


    $scope.IMAGE_LOCATION = "./src/images/foods/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/foods.json", function(data) {
        var foodData = data;


        //$scope.hero = getHero($routeParams.hero);

        $scope.test = "This is the id : " + $routeParams.slide + "";
        var foodId = parseInt($routeParams.slide);



        for (var i = 0; i < foodData.length; i++) {
            if (foodData[i].id == foodId) {

                $scope.title = foodData[i].title;
                $scope.id = foodData[i].id;
                $scope.desc = foodData[i].desc;
                $scope.image = foodData[i].image;
                $scope.prot = foodData[i].protien;
                $scope.fat = foodData[i].fats;
                $scope.ener = foodData[i].energy;
                //alert($scope.title);

            }

        }


        scope.updateDetails = function(id, title, desc, prot, fat, ener) {


            for (var i = 0; i < foodData.length; i++) {
                if (foodData[i].id == foodId) {

                    foodData[i].title = title;
                    foodData[i].id = id;
                    foodData[i].desc = desc;
                    foodData[i].protien = prot;
                    foodData[i].fats = fat;
                    foodData[i].energy = ener;
                    alert($scope.title);

                }








            }








        }



    });


});
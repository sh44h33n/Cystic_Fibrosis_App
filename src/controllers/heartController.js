var app = angular.module('CysticFibrosis');

app.controller('heartController', ['$scope', function($scope) {
    var ctrl2 = this;








    $scope.respResult = function() {


        var heart = $scope.heartrate;
        var breath = $scope.breathrate;



        if ((heart < 69 || heart > 200)) {
            return ("The blood pressure is invalid, please consult your doctor");

        } else if ((breath < 39 || breath > 170)) {
            return ("The blood pressure is invalid, please consult your doctor");

        } else if ((69 < heart < 120) && (39 < breath < 80)) {
            return ("having normal blood pressure, continue your current diet and any doctor prescribed madication.");

        } else if ((120 < heart < 139) && (80 < breath < 89)) {
            return ("having pre-hypertension, you should use foods such as lean protein whole grains, low-fat dairy fruits and avoid high-sodium foods such as Deli meats, Pickles, Canned soups, and etc.");
        } else if ((145 < heart < 159) && (90 < breath < 99)) {
            return (" have prehypertension stage one which first stage of hypertesion. You should consult your doctor, and follow regular excercising plans and seriously avoid hight sodium foods.");
        } else if ((160 < heart < 180) && (100 < breath < 110)) {
            return ("having prehypertension stage two that is second stage hypertesion, you should urgently consult your doctor and get medication. You require more excercises and stickly avoid sugur, coffee and all foods that are high in sodium such as canned chicken soups, pickles and etc");
        } else if ((179 < heart < 200) && (109 < breath < 170)) {
            return ("having hypertension Crisis, you should consult a doctor as an emergency case");

        }


    };













}]);
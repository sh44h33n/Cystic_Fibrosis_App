var app = angular.module('CysticFibrosis');

app.controller('heartController', ['$scope', function($scope) {
    var ctrl2 = this;






    // Analysing Heart rate / Pulse rate

    $scope.heartResult = function() {


        var heart = $scope.heartrate;




        if ((heart < 40 || heart > 220)) {
            return ("Your heart rate is not in valid range, please follow the instructions and try again or consult the doctor");



        } else if (39 < heart && heart < 90) {
            return ("Your heart rate is normal, within the average range of cystic fibrosis patient, continue your current nutrotion plan / diet and any doctor prescribed madication/enzymes.");

        } else if (89 < heart && heart < 110) {
            return ("Your heart rate is higher than normal, it is very likely that an lung infection is in progress, please consult your doctor before it becomes severe.");
        } else if (109 < heart && heart < 130) {
            return ("The heart rate and respiration rate is very too high, you should consult your doctor as an emergency case");

        } else { "The heart rate is not in valid range, please follow the instructions and try again or consult the doctor" }


    };




    // Analysing Respiration/ Breathe Rate

    $scope.respResult = function() {



        var breath = $scope.breathrate;





        if ((breath < 20 || breath > 55)) {
            return ("Your respiration rate is not in valid range, please follow the instructions and try again or consult the doctor");

        } else if (19 < breath && breath < 35) {
            return ("Your respiration rate is normal, within the average for cystic fibrosis patient, continue your current nutrition plan / diet and any doctor prescribed madication/enzymes.");

        } else if (34 < breath && breath < 45) {
            return ("The Respiration rate and heart rate is higher than normal, it is very likely that an lung infection is in progress, please consult your doctor before it becomes severe");
        } else if (44 < breath && breath < 55) {
            return ("Your respiration rate is very too high, you should consult your doctor as an emergency case");

        } else { "The respiration rate is not in valid range, please follow the instructions and try again or consult the doctor" }


    };













}]);
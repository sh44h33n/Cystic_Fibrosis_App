var app = angular.module('CysticFibrosis');

app.controller('heartController', ['$scope', function($scope) {
    var ctrl2 = this;








    $scope.respResult = function() {


        var heart = $scope.heartrate;
        var breath = $scope.breathrate;



        if ((heart < 100 || heart > 220)) {
            return ("The respiration rate and heart rate is not in valid range, please follow the instructions and try again or consult the doctor");

        } else if ((breath < 20 || breath > 55)) {
            return ("The respiration rate and heart rate is not in valid range, please follow the instructions and try again or consult the doctor");

        } else if ((99 < heart && heart < 140) && (19 < breath && breath < 35)) {
            return ("Normal heart rate or respiration rate for average cystic fibrosis patient, continue your current nutrotion plan / diet and any doctor prescribed madication/enzymes.");

        } else if ((140 < heart && heart < 180) && (34 < breath && breath < 45)) {
            return ("The Respiration rate and heart rate is higher than normal, it is very likely that an lung infection is in progress, please consult your doctor before it becomes severe");
        } else if ((180 < heart && heart < 219) && (44 < breath && breath < 55)) {
            return ("The heart rate and respiration rate is very too high, you should consult your doctor as an emergency case");

        } else { "The respiration rate and heart rate is not in valid range, please follow the instructions and try again or consult the doctor" }


    };













}]);
var app = angular.module('CysticFibrosis');

app.controller('bloodController', ['$scope', function($scope) {
    var ctrl2 = this;








    $scope.bloodResult = function() {


        var systo = $scope.systolic;
        var diasto = $scope.diastolic;



        if ((systo < 69 || systo > 200)) {
            return ("The blood pressure is invalid, please consult your doctor");

        } else if ((diasto < 39 || diasto > 170)) {
            return ("The blood pressure is invalid, please consult your doctor");

        } else if ((69 < systo < 120) && (39 < diasto < 80)) {
            return ("having normal blood pressure, continue your current diet and any doctor prescribed madication.");

        } else if ((120 < systo < 139) && (80 < diasto < 89)) {
            return ("having pre-hypertension, you should use foods such as lean protein whole grains, low-fat dairy fruits and avoid high-sodium foods such as Deli meats, Pickles, Canned soups, and etc.");
        } else if ((145 < systo < 159) && (90 < diasto < 99)) {
            return (" have prehypertension stage one which first stage of hypertesion. You should consult your doctor, and follow regular excercising plans and seriously avoid hight sodium foods.");
        } else if ((160 < systo < 180) && (100 < diasto < 110)) {
            return ("having prehypertension stage two that is second stage hypertesion, you should urgently consult your doctor and get medication. You require more excercises and stickly avoid sugur, coffee and all foods that are high in sodium such as canned chicken soups, pickles and etc");
        } else if ((179 < systo < 200) && (109 < diasto < 170)) {
            return ("having hypertension Crisis, you should consult a doctor as an emergency case");

        }


    };













}]);
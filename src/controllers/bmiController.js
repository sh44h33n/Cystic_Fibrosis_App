angular.module('CysticFibrosis').controller('bmiController', ['$scope', function($scope) {
    var ctrl = this;




    $scope.calcBMI = function() {
        $scope.BMI = ($scope.weight * 703) / $scope.height / $scope.height;
        var BMI = $scope.BMI;
        return (BMI);
    };

    $scope.BMIhealth = function() {
        $scope.BMI = ($scope.weight * 703) / $scope.height / $scope.height;
        var BMI = $scope.BMI;
        if (BMI < 18.5) {
            return ("Underweight, try to include more protien and high-calorie foods in your diet.");
        } else if (BMI < 25) {
            return ("Normal, continue your current diet.");
        } else if (BMI < 30) {
            return ("Overweight, please reduce your protien and fats intake.");
        } else if (BMI > 30) {
            return ("Obese, you must remove some fatty, and high-sugur foods and engage in daily aerobic excercises.");
        };
    };










}]);
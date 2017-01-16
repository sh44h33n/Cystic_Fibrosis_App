var app = angular.module('CysticFibrosis', ['ngRoute', 'ui.bootstrap']);

app.factory('DataSource', ['$http', function($http) {
    return {
        get: function(fileName, callback) {
            $http.get(fileName).
            success(function(data, status) {
                callback(data);
            });
        }
    };
}]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html'

        })
        .when('/nutrition', {
            templateUrl: './views/nutrition.html',
            controller: 'bmiController'


        })
        .when('/brand', {
            templateUrl: './views/home.html'

        })
        .when('/home', {
            templateUrl: './views/home.html'


        })
        .when('/information', {
            templateUrl: './views/information.html',
            controller: 'informationController'

        })
        .when('/login', {
            templateUrl: './views/login.html',


        })
        .when('/register', {
            templateUrl: './views/registration.html',


        })
        .when('/about', {
            templateUrl: './views/about.html'

        })
        .when('/heart', {
            templateUrl: './views/heart.html',
            controller: 'heartController'

        })
        .when('/blood', {
            templateUrl: './views/blood.html',
            controller: 'bloodController'


        })
        .when('/respiration', {
            templateUrl: './views/respiration.html',
            controller: ''


        })
        .when('/dietlog', {
            templateUrl: './views/dietlog.html',
            controller: 'dietController'


        })
        .when('/dietlog/:slide/edit', {
            templateUrl: './views/edit.html',
            controller: 'editController'


        })
        .when('/add', {
            templateUrl: './views/add.html',
            controller: 'addController'


        })


    .otherwise('/home');


});

app.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
});

app.controller('DropdownCtrl', function($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});


app.controller('ImageSlider', function($scope, DataSource) {
    $scope.myInterval = 2000;

    var IMAGE_WIDTH = 100;
    $scope.IMAGE_LOCATION = "./src/images/slides/";

    // Retrieving and creating image array using json files
    DataSource.get("./src/JsonImageFiles/slide.json", function(data) {
        $scope.slides = data;

    });



});




app.directive('tooltip', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).hover(function() {
                // on mouseenter
                $(element).tooltip('show');
            }, function() {
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});

function setValue($scope, data) {
    sharedProperties.setProperty($scope.data);
}

function getValue($scope, sharedProperties) {
    $scope.data = sharedProperties.getProperty();
}
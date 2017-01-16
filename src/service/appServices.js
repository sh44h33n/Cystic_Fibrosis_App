var app = angular.module('CysticFibrosis');
//application services availablw to all the controllers


app.service('appService', function() {
    var foodData = new Array();


    //food array for adding to food page from services...


    var foodData = [{

            "title": "Watermelon",
            "id": "10",
            "desc": "Healthy fruit",
            "protien": "0.6 gram protien",
            "fats": "0.9 gram fats",
            "energy": "658KJ energy",
            "image": "melon.jpg"
        },
        {

            "title": "Mango",
            "id": "11",
            "desc": "Healthy fruit",
            "protien": "0.9 gram protien",
            "fats": "1.9 gram fats",
            "energy": "958KJ energy",
            "image": "mango.jpg"
        }
    ]

    return {
        getnewFoods: function() {
            return foodData; //return food array
        },


    }
});
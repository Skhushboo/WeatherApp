var app = angular.module('myapp',['ngRoute']);
 app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "welcome.html",
            controller : "myController"
        })

        .when("/weather",{
            templateUrl : "weather.html",
            controller : "myController"
        })
 });

app.controller('myController', function($scope,$http){

    $scope.refresh = function(){
            $http
                .get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.location + "&APPID=4a850fb2652949bb0c04c9acfe936c1c&callback")
                .then(function (response) {
                     $scope.weatherObj = response.data.weather[0];
                     $scope.tempObj = response.data.main;
                     $scope.humidObj = response.data.main;
                     $scope.windObj = response.data.wind;

                    console.log(response.data.main);
                    console.log(response.data.weather);

                });
        }
});


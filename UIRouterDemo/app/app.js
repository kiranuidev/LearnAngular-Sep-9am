(
    function () {
        'use strict';
        angular.module("demoApp", ['ui.router']);

        angular.module('demoApp')
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/home");
                //definig the states.
                var homeObj = {
                    name: "home",
                    templateUrl: 'app/templates/home.html',
                    url: "/home",
                    controller:"homeCtrl",
                    params:{homeData:""}
                };
                var registerObj = {
                    name: "register",
                    templateUrl: 'app/templates/register.html',
                    url: "/register",
                    controller:"registerCtrl"
                };
                var loginObj = {
                        name: "login",
                        templateUrl: 'app/templates/login.html',
                        url: "/login"
                    }
                    //register the state with state provider.
                $stateProvider.state('home', homeObj);
                $stateProvider.state('register', registerObj);
                $stateProvider.state('login', loginObj);

    }]);
        
        function homeCtrl($scope,$state){
            console.log($state);
        }

        function registerCtrl($scope,$state) {
            $scope.user={};
            $scope.register=function(){
                $state.go("home",{homeData:$scope.user});
            };

        }
       
        angular.module("demoApp")
            .controller("homeCtrl",homeCtrl)
            .controller("registerCtrl",
                                             [ "$scope","$state",registerCtrl]);

    }
)();

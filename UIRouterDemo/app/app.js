(
    function () {
        'use strict';
        angular.module("demoApp", ['ui.router']);
        angular.module("demoApp")
        .provider("version",[function(){
            this.versionNumber="10.0.0";
            this.createVersionNumber = function(data){
                this.versionNumber= data;
            };
            this.$get =function(){
                return this.versionNumber;
            };
        }]);

        angular.module('demoApp')
            .config(['$stateProvider', '$urlRouterProvider','versionProvider', function ($stateProvider, $urlRouterProvider,versionProvider) {
                
                     console.log(versionProvider.versionNumber);
                
                versionProvider.createVersionNumber("2.0.0");
                 console.log(versionProvider.versionNumber);
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
        
        function homeCtrl($scope,$state,version){
            console.log($state);
            console.log(version);
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

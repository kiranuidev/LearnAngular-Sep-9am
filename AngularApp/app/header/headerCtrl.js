(function(){
    function headerCtrl($scope){
        $scope.brandName="FlipSnap";
        $scope.headerUrl="app/header/header.html";
        $scope.loadRegisterPage= function(){
            $scope.contentUrl="app/register/register.html"
        };
         $scope.loadLoginPage= function(){
            $scope.contentUrl="app/login/login.html"
        };
    }
    
    
    angular.module("header").controller("headerCtrl",headerCtrl);
    
})();
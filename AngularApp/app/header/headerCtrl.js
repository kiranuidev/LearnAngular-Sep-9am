(function () {
    function headerCtrl($scope, lookupSvc) {
        //$scope.navItems =["Home","Login","Register"];
        $scope.navItems = lookupSvc.getNavItems();
        $scope.brandName = "FlipSnap";
        $scope.headerUrl = "app/header/header.html";


        $scope.loadPage = function (data) {
            // console.log(kiran);
            $scope.contentUrl = data.templateUrl;
        };
    }


    angular.module("header").controller("headerCtrl", headerCtrl);

})();

(function () {

    function productCtrl($scope, productSvc) {
        $scope.productList = productSvc.getProducts();
    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();

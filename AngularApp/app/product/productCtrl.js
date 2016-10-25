(function () {

    function productCtrl($scope, productSvc) {
        productSvc.counter()
            .then(function (response) {
            $scope.counter = response;
        }).catch(function(response){
            $scope.counter = response;
        });
        $scope.productList = productSvc.getProducts();
    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productSvc", productCtrl])
})();

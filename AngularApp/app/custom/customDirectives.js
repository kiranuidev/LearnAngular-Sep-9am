(function () {
    function customLogo() {
        return {
            /*1*/
            template:'<a href="#" class="navbar-brand">{{brandName}}</a>',
            restrict:"A,E,C"
      
      };
    }
    
    function customHeader(){
        return{
            templateUrl:"app/custom/customheader.html",
            restrict:"A"
        };
    }
    /*diretive name is customLogo -- camel casing*/
    angular.module("custom")
        .directive("customLogo", [customLogo])
        .directive("customHeader",[customHeader]);
})();

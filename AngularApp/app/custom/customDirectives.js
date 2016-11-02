(function () {
    function customLogo() {
        return {
            /*1*/
            template: '<a href="#" class="navbar-brand">{{brandName}}</a>',
            restrict: "A,E,C"

        };
    }

    function customHeader() {
        return {
            templateUrl: "app/custom/customheader.html",
            restrict: "A"
        };
    }

    function customClick() {
        return {
            restrict: "A",
            link: function (scope, ele, attrs) {
                ele.bind("click", function () {
                    var fun = attrs["customClick"];
                    scope.$eval(fun);
                });
            }
        };
    };

    function customNumbersOnly() {
        return {
            restrict:"A",
            link: function (scope, element, attrs) {
                element.bind("keypress", function (e) {
                    var customlength = attrs["customlength"];
                    console.log(customlength);
                    if (e.charCode >= 48 && e.charCode <= 57 && this.value.length<customlength) {

                    } else {
                        e.preventDefault();
                    }
                });
            }
        }
    }
    /*diretive name is customLogo -- camel casing*/
    angular.module("custom")
        .directive("customLogo", [customLogo])
        .directive("customHeader", [customHeader])
        .directive("customClick", [customClick])
    .directive("customNumbersOnly", [customNumbersOnly]);
})();

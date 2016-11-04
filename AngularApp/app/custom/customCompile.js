(

function(){

    function customCompile(){
        return{
            template:'<div ng-transclude></div><h1>Hello</h1>',
            transclude:true,
            restrict:"A",
            controller:function($scope){
            },
            // link: function(scope,element,attrs),
            compile:function(element,attrs){
                 //raw html of the element.
                return{
                    pre:function(scope,element,attrs){

                    },
                    post:function(scope,element,attrs){

                    }
                }
            }

        }
    }

    angular.module("custom")
    .directive("customCompile",[customCompile]);

}

)();
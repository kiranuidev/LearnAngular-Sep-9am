(
  function(){
      function customScope(){
          return{
              
              restrict:"A",
              templateUrl:"app/custom/customTemplate.html",
              scope:{
                  brandName:"@",//one way.,
                  user:"="//two way
              },
              link:function(scope){
                  scope.user="kiran";
              }
              
          }
      }
      
      angular.module("custom")
      .directive("customScope",[customScope])
      
  }
)()
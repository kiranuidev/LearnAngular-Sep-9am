(function(){
    angular.module("flipsnap",["register"]);
    
    angular.module("flipsnap")
    .config(function(){
       console.log("i am the flipsnap module"); 
    });
    
    
    angular.module("flipsnap")
    .run(function(){
       console.log("i am the run flipsnap module"); 
    });
    
    
})();
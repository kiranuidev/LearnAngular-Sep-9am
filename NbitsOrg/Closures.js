function bookTicket(source,destination){
    var discount;
    
    //innerfunction
    return function(mode,customerName){
        
        /*if(mode=="train"){
            discount=10;
        }
         else if(mode=="flight"){
            discount=5000
        }
        else if (mode=="bus"){
            discount=100;
        }
        console.log("Dear: "+customerName);
        console.log("Your Ticket from "+ source +" To :"+destination);
        console.log("Status:Confirmed");
        console.log("Discount:"+discount);
        console.log("Mode of Transport: "+mode);*/
        
        return function(){
            console.log(mode);
            console.log(source);
        }
    }
    
}


var busTicket= bookTicket("Hyderabad","Repalle");
/*var flight = bookTicket("Hyderad","Vijayawada");
flight("flight","Nishant");*/
var getMode =busTicket("bus","kiran");
getMode();


/*var b=function(){
    console.log("hai");
}
var a =b;
a();*/

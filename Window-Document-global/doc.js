//document.write("Welcome to the DOM");
var divTag= document.getElementById("divFirstName");


console.log(ele);

for(var i=0;i<10;i++){
  var ele = document.createElement("input");
    var p=document.createElement("p");
    p.textContent="hey";
ele.type="checkbox";
ele.id="txtName"+i;
divTag.appendChild(ele); 
    divTag.appendChild(p);  
        
}

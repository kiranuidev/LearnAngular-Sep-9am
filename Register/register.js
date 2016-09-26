
var controls = {};
controls.firstName = document.getElementById("txtFirstName");
controls.lastName = document.getElementById("txtLastName");
controls.registerButton = document.getElementById("btnRegister");
var data="kliran";

function getValuesFromControls(){
    var userDetails={};
    userDetails.fName=controls.firstName.value;
    userDetails.lName=controls.lastName.value;
}

function registerUser(){
    alert("Hey User clicked");
}

function alphabetsOnly(evt){
    //console.log(evt);
    if((evt.keyCode>=97 && evt.keyCode<=122)
       ||(evt.keyCode>=65 && evt.keyCode<=90)
       ||(evt.keyCode==32 ||evt.keyCode==46)
      ){
        
    }
    else{
        evt.preventDefault();
    }
}

function bindEventsToControls(){
 controls.registerButton.addEventListener('click',registerUser);
    controls.firstName.addEventListener("keypress",alphabetsOnly);
    controls.lastName.addEventListener("keypress",alphabetsOnly);
     /*controls.registerButton.addEventListener('mouseover',registerUser);*/
}

bindEventsToControls();














/*
Single Responsibility Principle SRP*/

//function declaration.
function registerUser(username) {
    /*var isValidUser = checkUserNameRange(username);
    var isValidString = checkUserNameIsNumber(username);*/
    if (checkNameIsNumber(username, 6, 10) && checkNameRange(username)) {
        //Register user
    } else {
        console.log("Invalid user");
    }
}

//function declrarion.
var checkNameRange = function (username, minlength, maxlength) {
    /*if (username.length < 6 && username.length > 10) {
        return false;
    } else {
        return true;
    }*/
    return username.length < minlength && username.length > maxlength;
};

//function declaration.
function checkUserNameIsNumber(username) {
    /*  if (typeof username == 'string') {
          return true;
      } else {
          return false;
      }*/
    return typeof username == 'string';

}

//function call /excute.
registerUser("kirnann");
registerUser(1234567890);

checkNameRange("venkatkkkkkkkk", 3, 15);

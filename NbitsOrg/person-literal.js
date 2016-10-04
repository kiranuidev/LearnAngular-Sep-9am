(function () {
/*    var person = {

        prefix: "Mr.",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        DoB: "",
        homePhone: {
            ISDCode: "",
            phoneNumber: ""
        },
        mobilePhone: {
            ISDCode: "",
            phoneNumber: ""
        }


    };*/
    //var user ={};
    var user = new Object();
    user.firstname="kiran";

    var student = person;
    student.prefix = "Miss";
    console.log(student.prefix);
    console.log(person.prefix);



})();

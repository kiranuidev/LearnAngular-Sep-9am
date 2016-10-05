(function () {

    function phone() {
        this.ISDCode = "";
        this.PhoneNumber = "";
    }

    function person() {
        var panNumber = "CBDE67889Q";
        this.firstName = "";
        this.lastName = "";
        this.getMaskedPAN = function () {
            return "xxxxx-x" + panNumber.substring(6, 10);
        };
        this.homePhone = new phone();
        this.mobilePhone = new phone();
    }

    var student = new person();
    student.firstName = "kiran";
    var maskedData = student.getMaskedPAN();
    //console.log(student);
    student.marks = 100;

    var employee = new person();


    var designation = new Object(employee);

    employee.firstName = "Ravi";
    employee.gender = "M";
    console.log(employee);
    console.log(designation);

    var security = new person();
    security.firstName = "John";


    person.prototype.gender = "";
    var data = new Array();
    console.log(data);
    var users = [0, 1, 2, 3, 4, 5, 6];
    Array.prototype.even = function () {
        var output = [];
        for (var i = 0; i < this.length; i++) {
            if (i % 2 == 0) {
                output.push(this[i]);
            }
        }
        return output;
    };

    Array.prototype.even = function () {
        var output = [];
        for (var i = 0; i < this.length; i++) {
            if (i % 2 == 1) {
                output.push(this[i]);
            }
        }
        return output;
    };
   /* console.log(users.even());

    console.log(student);
    console.log(employee);
    console.log(security);*/
})();

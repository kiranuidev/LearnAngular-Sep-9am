(function(){
    
    function phone(){
        this.ISDCode="";
        this.PhoneNumber="";
    }
    
    function person(){
        var panNumber="CBDE67889Q";
        this.firstName="";
        this.lastName="";
        this.getMaskedPAN= function(){
            return "xxxxx-x"+panNumber.substring(6,10);
        };
        
        this.homePhone= new phone();
        this.mobilePhone = new phone();
    }
    
    var student= new person();
    student.firstName="kiran";
    var maskedData = student.getMaskedPAN();
    console.log(student);
    student.marks=100;
    
    var employee = new person();
    employee.firstName="Ravi";
    
    var security = new person();
    security.firstName="John";
    
   /* console.log(student);
    console.log(employee);
    console.log(security);*/
})();
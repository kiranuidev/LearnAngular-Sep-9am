//Immediate functions are self executable functions.
//they are not attached to the global scope
//they are anonymous.
(function (bookApi) {

    
    var bookList = [{
            name: "Angular",
            author: "Kiran",
            price: 1000
        },
        {
            name: "Node",
            author: "Kiran",
            price: 2000
        }, {
            name: ".Net",
            author: "Kiran",
            price: 1000
        }];
    
    var getBooks = function(){
        return bookList;
    };
    var addBook = function(book){
        bookList.push(book);
    };
    var removeBook = function(book){
    // remove the book from the array.
    };
    bookApi.get=getBooks;
    bookApi.add=addBook;
    

})(window.bookApi={});
function helloWorld(){
    alert("hi");
}

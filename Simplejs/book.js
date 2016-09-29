(
    function () {
        var htmlControls = {};
        htmlControls.bookName = document.getElementById("txtBookName");

        htmlControls.author = document.getElementById("txtAuthor");

        htmlControls.price = document.getElementById("txtPrice");

        htmlControls.btnAdd = document.getElementById("btnAddBook");


        //bindEvents to elements.
        htmlControls.btnAdd.addEventListener("click", readData)


        function readData() {
            var book = {};
            /* var bookname =htmlControls.bookName.value;
             var author = htmlControls.author.value;
             var price= htmlControls.price.value;*/

            book.name = htmlControls.bookName.value;
            book.author = htmlControls.author.value;
            book.price = htmlControls.price.value;
            var isSaved=saveData(book);
            if(isSaved){
            clearData();
            }
            else{
                alert("data not saved");
            }

        }


        function saveData(novel) {
            if (novel.price == 2000) {
                console.log(novel);
                return true;
            }
            else{
                false;
            }
        }

        function clearData() {
            htmlControls.bookName.value = "";
            htmlControls.author.value = "";
            htmlControls.price.value = "";
        }




    }
)();

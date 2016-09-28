(function () {
    var ctrls = {};
    ctrls.author = document.getElementById('txtAuthor');
    ctrls.book = document.getElementById('txtBookName');
    ctrls.price = document.getElementById('txtPrice');
    ctrls.addButton = document.getElementById("btnAddBook");
    ctrls.table = document.getElementById("tblBooks");

    function bindData() {
        ctrls.table.innerHTML = '';
        var books = bookApi.get();
        for (var i = 0; i < books.length; i++) {
            createRow(books[i]);
        }
    }

    function createRow(book) {
        var row = document.createElement("tr");
        createColumn(row, book.author);
        createColumn(row, book.name);
        createColumn(row, book.price);
        ctrls.table.appendChild(row);
    }

    function createColumn(tr, data) {
        var column = document.createElement("td");
        column.textContent = data; //innerHTML refers to the content between opening and closing tag eg: <p><h1>hai</h1></p>
        tr.appendChild(column);
    }

    function addBook() {
        var book = {};
        book.name = ctrls.book.value;
        book.price = ctrls.price.value;
        book.author = ctrls.author.value;
        bookApi.add(book);
        bindData();
        clearControls();
    }

    function bindEvents() {
        ctrls.addButton.addEventListener("click", addBook);
    };

    function initPage() {
        bindEvents();
        bindData();
    }

    function clearControls() {
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

    }

    initPage();
})();

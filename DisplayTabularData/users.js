//step 1
// get the users
// loop through the users
//  create a row for each user.
// inside the row create td for username 
// inside the row create td for firstname
// bind the data to the table.

var users = [
    {
        username: "Kiran",
        firstname: "PVS"
    },
    {
        username: "Ravi",
        firstname: "Abcd"
    },

];

function bindData() {
    for (var i = 0; i < users.length; i++) {
        createRow(users[i]);
    }
}

function createRow(user) {
    var table = document.getElementById("tblUsers");
    var row = document.createElement("tr");
    createColumn(row, user.username);
    createColumn(row, user.firstname);
    table.appendChild(row);
}

function createColumn(tr, data) {
    var column = document.createElement("td");
    column.textContent = data; //innerHTML refers to the content between opening and closing tag eg: <p><h1>hai</h1></p>
    tr.appendChild(column);
}
bindData();

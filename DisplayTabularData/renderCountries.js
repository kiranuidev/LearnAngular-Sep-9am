// 1. get the countries from countries.js fie
// loop through the countries
// get the referece of the select box
// create an option tag and attach value, text properties
// bind option to the select box.

function bindCountries() {
    var countries = getCountries();
    var dropDown = document.getElementById("ddlCountries");
    for (var i = 0; i < countries.length; i++) {
        var tag = createOptionTag(countries[i]);
        dropDown.appendChild(tag);

    }
}

function createOptionTag(data) {
    var optionTag = document.createElement("option");
    optionTag.value = data.code;
    optionTag.textContent = data.name;
    return optionTag;
}

bindCountries();

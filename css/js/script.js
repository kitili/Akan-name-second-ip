var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function date() {
    var date = document.getElementById("date").value;
    if (date == "") {
        alert("Please fill in the Date ");
        return false;
    }
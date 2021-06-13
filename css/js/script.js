var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function date() {
    var date = document.getElementById("date").value;
    if (date == "") {
        alert("Please fill in the Date ");
        return false;
    }
}

function month() {
    alert("PLease fill in the Month");
    return false;
}

function showYear() {
    var year = document.getElementById("year").value;

    if (year == "") {
        alert("PLease fill in the Year");
        return false;
    }
}

}

function century() {
    var century = document.getElementById("century").value;
    if (century == "") {
        alert("Please fill in the Century");
        return false;
    }
}

function gender() {
    var gender = document.getElementById("gender").value;
    if (gender == "1") {
        alert("Please select gender");
        return false;
    }
}
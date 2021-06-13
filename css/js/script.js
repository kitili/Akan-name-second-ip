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

function allLetters(input) {
    var characters = /[^a-z]/gi;
    input.value = input.value.replace(characters, "");
}

}

function digits(input) {
    var digits = /[^0-9]/;
    input.value = input.value.replace(digits, "");
}

function year() {
    var year = document.getElementById('year').value;
    if (year < 1899 || year > currentYear) {
        alert("Invalid Year");
        return false;
    }
}

function leapYear() {
    var monthsWithThirtyOneDays = [1, 3, 5, 7, 9, 10, 12];
    var monthNumber = parseInt(document.getElementById("month").value);
    var dayNumber = parseInt(document.getElementById("date").value);
    var yearNumber = parseInt(document.getElementById("year").value);
    var yearNumber = parseInt(document.getElementById("century").value);
    var first = yearNumber % 100;
    var second = yearNumber % 400;
    var third = yearNumber % 4;
    var fourth = monthsWithThirtyOneDays.includes(monthNumber);

    if (monthNumber === 2 && dayNumber > 28 && first === 0 && second !== 0) {
        alert("Invalid day: The entered year, February had 28 days.");
        return false;
    } else if (monthNumber === 2 && dayNumber > 28 && third !== 0) {
        alert("Invalid day: The entered year, February had 28 days.");
        return false;
    } else if (!fourth && dayNumber > 30) {
        alert("Invalid day: The selected month has 30 days");
        return false;
    } else if (dayNumber > 31 || dayNumber < 1) {
        alert("Invalid day: Months have a possible 1 to 31 days");
        return false;
    }
}
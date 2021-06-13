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

function formData() {
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var association = ["Universe", "Peace", "Ocean", "Spider", "Earth", "Fertility", "God"];
    var cc = parseInt(document.getElementById("century").value.slice(0, 2));
    var yy = parseInt(document.getElementById("year").value.slice(2, 4));
    var dd = parseInt(document.getElementById("day").value);
    var mm = parseInt(document.getElementById("month").value);
    var method = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var weekDay = daysOfTheWeek[method.toFixed()];
    var gender = parseInt(document.getElementById("gender").value);

    if (weekDay === 'Sunday' && gender == 2) {
        document.getElementById("output").value = "You were born on Sunday: Your Akan Name is: " + akanMale[0] + ".It is associated with: " + association[0];
        return true;
    } else if (weekDay === 'Sunday' && gender == 3) {
        document.getElementById("output").value = "You were born on Sunday: Your Akan Name is: " + akanFemale[0] + ".It is associated with: " + association[0];
        return true;

    } else if (weekDay === 'Monday' && gender == 2) {
        document.getElementById("output").value = "You were born on Monday: Your Akan Name is: " + akanMale[1] + ".It is associated with: " + association[1];
        return true;
    } else if (weekDay === 'Tuesday' && gender == 2) {
        document.getElementById("output").value = "You were born on Tuesday: Your Akan Name is: " + akanMale[2] + ".It is associated with: " + association[2];
        return true;
    } else if (weekDay === 'Wednesday' && gender == 2) {
        document.getElementById("output").value = "You were born on Wednesday: Your Akan Name is: " + akanMale[3] + ".It is associated with: " + association[3];
        return true;
    } else if (weekDay === 'Wednesday' && gender == 3) {
        document.getElementById("output").value = "You were born on Wednesday: Your Akan Name is: " + akanFemale[3] + ".It is associated with: " + association[3];
        return true;
    } else if (weekDay === 'Thursday' && gender == 2) {
        document.getElementById("output").value = "You were born on Thursday: Your Akan Name is: " + akanMale[4] + ".It is associated with: " + association[4];
        return true;
    } else if (weekDay === 'Thursday' && gender == 3) {
        document.getElementById("output").value = "You were born on Thursday: Your Akan Name is: " + akanFemale[4] + ".It is associated with: " + association[4];
        return true;
    } else if (weekDay === 'Friday' && gender == 2) {
        document.getElementById("output").value = "You were born on Friday: Your Akan Name is: " + akanMale[5] + ".It is associated with: " + association[5];
        return true;
    } else if (weekDay === 'Friday' && gender == 3) {
        document.getElementById("output").value = "You were born on Friday: Your Akan Name is: " + akanFemale[5] + ".It is associated with: " + association[5];
        return true;
    } else if (weekDay === 'saturday' && gender == 2) {
        document.getElementById("output").value = "You were born on Saturday: Your Akan Name is: " + akanMale[6] + ".It is associated with: " + association[6];
        return true;
    } else if (weekDay === 'Saturday' && gender == 3) {
        {
            document.getElementById("output").value = "You were born on Saturday: Your Akan Name is: " + akanFemale[6] + ".It is associated with: " + association[6];
            return true;
        }
    }
}

function clearForm() {
    document.getElementById("form").reset();
}

function clear() {
    document.getElementById("answer").reset();
}
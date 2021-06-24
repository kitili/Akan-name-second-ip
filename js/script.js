const daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const maleNames = ["kwasi", "Kwandwo", "Kwabena", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function birthIndex(d, m, yr) {
    let dd = parseInt(d);
    let mm = parseInt(m);
    let cc = Math.floor(yr / 100);
    let yy = parseInt(yr.slice(2, 4));
    let dayOfTheWeek = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    return dayOfTheWeek;
}

function UserData() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if (day < 0 || day > 31 || month < 0 || month > 12) {
        alert("Invalid day or month")
    }
    let dayIndex = birthIndex(day, month, year);
    return dayIndex;
}

function output(event) {
    event.preventDefault();
    let data = UserData();
    if (document.getElementById("male").checked) {
        alert("your akan name is " + maleNames[data]);

    } else if (document.getElementById("female").checked) {
        alert("your akan name is " + femaleNames[data]);
    }

}
document.getElementById("submit").addEventListener("click", output)
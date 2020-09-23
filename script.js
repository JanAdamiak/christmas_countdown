function datePicker() {
    const currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    if (new Date(currentYear, 11, 24).getTime() >= currentDate.getTime()){
        const christmasDate = new Date(currentYear, 11, 24)
        return christmasDate
    }
    else {
        const christmasDate = new Date(currentYear + 1, 11, 24)
        return christmasDate
    }
};

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const myDate = datePicker();

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (myDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

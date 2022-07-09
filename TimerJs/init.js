let dayField = document.getElementById('days');
let hourField = document.getElementById('hours');
let minuteField = document.getElementById('minutes');
let secondField = document.getElementById('seconds');

// const d = new Date();
// const m = new Date();
// const y = new Date();
//
// const myBday = d.setDate(8) + m.setDate(4) + y.setDate(2023);

const myBday = new Date("Apr 8, 2023");

const timer = () => {
    const bDate = new Date(myBday);
    const currentDate = new Date();

    const seconds = ((bDate - currentDate) / 1000);

    const secs = Math.floor(seconds % 60);
    const mins = Math.floor((bDate - currentDate) / 1000 / 60) % 60;
    const hours = Math.floor((bDate - currentDate) / 1000 / 3600) % 24;
    const days = Math.floor((bDate - currentDate) / 1000 / 3600 / 24);

    dayField.innerHTML = days;
    hourField.innerHTML = hours;
    minuteField.innerHTML = mins;
    secondField.innerHTML = secs;

    console.log(secs, mins, hours, days);

    // console.log(bDate);
    // console.log(currentDate);
    // console.log(bDate - currentDate);

}

timer();
setInterval(timer, 1000);

// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }

// initial call
// countdown();
//
// setInterval(countdown, 1000);

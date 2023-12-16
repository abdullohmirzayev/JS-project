const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// function to add days
function initCalendar() {
  // to get prev month and current month all days and rem next month days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  // updata date top of calendar
  date.innerHTML = `${months[month]} ${year}`;

  // adding days on dom

  let days = "";

  // prev month days

  for (let x = day; x > 0; x--) {
    days += `<div class='day prev-date'>${prevDays - x + 1}</div>`;
  }

  // current month days

  for (let i = 1; i <= lastDate; i++) {
    // if day is today add class today
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      days += `<div class='day today'>${i}</div>`;
    }
    // add remaing as it is
    else {
      days += `<div class='day'>${i}</div>`;
    }
  }

  // next month days

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class='day next-date'>${j}</div>`;
  }

  daysContainer.innerHTML = days;
}

initCalendar();

// prev month

function prevMonth() {
  month--;
  if (month < 0) {
    month < 11;
    year--;
  }
  initCalendar();
}

// next month

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

// add eventlistnner on prev and next
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// our calendar is ready
// lets add goto date and goto today functionality

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  // allow only number remove anothing else
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    // add a slash if two number entered
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    // dom allow more then 7 chatacter
    dateInput.value = dateInput.value.slice(0, 7);
  }

  // if backsace pressed
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

// function to go to entered date

function gotoDate() {
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[i].length === 4) {
      month == dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  // if invalid date
  alert("invalid date");
}

const addEventBtn = document.querySelector(".add-event"),
  addEventContainer = document.querySelector(".add-event-wrapper"),
  addEventCloseBtn = document.querySelector(".close"),
  addEventTitle = document.querySelector(".event-name"),
  addEventFrom = document.querySelector(".event-name-from"),
  addEventTo = document.querySelector(".event-time-to");

addEventBtn.addEventListener("click", () => {
  addEventContainer.classList.toggle("active");
});
addEventCloseBtn.addEventListener("click", () => {
  addEventContainer.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  // if click outside
  if (e.target !== addEventBtn && !addEventCloseBtn.contains(e.target)) {
    addEventContainer.classList.toggle("active");
  }
});
// allow only 50 chars in title
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 50);
});

// time format in from and to time

addEventFrom.addEventListener("input", (e) => {
  // remove anything else number
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
});

const calendar = document.querySelector(".calendar"),
  date = document.querySelector("data"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getFullMonth();
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
    // to 
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDay = prevLastDay.getDate();
  const ladtDate = lastDay.getDate();
  const day = firstDay.getDate();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = `${month[month]} ${year}`;
}

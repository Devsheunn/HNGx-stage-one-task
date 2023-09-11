const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = new Date().getDay();
document.querySelector(".dayOfTheWeek").textContent = daysOfTheWeek[day];

//function expression to update time

const current = new Date().getTime();
document.querySelector(".UTCInMilliseconds").textContent = current;

const updateTime = function () {
  const current = new Date().getTime();
  document.querySelector(".UTCInMilliseconds").textContent = current;
};

setInterval(updateTime, 1000);

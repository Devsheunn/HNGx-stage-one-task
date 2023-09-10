const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//function expression to update time
const updateTime = function () {
  const current = new Date().getTime();
  document.querySelector(".UTCInMilliseconds").textContent = current;

  const day = new Date().getDay();
  document.querySelector(".dayOfTheWeek").textContent = daysOfTheWeek[day];
};

//using setInterval function to update time every 1000ms(1s)
function displayCurrentUTC() {
  setInterval(updateTime, 1000);
}
displayCurrentUTC();

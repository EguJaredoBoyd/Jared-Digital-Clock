//A function to display the date
function displayDate() {
  //Create the date and time variables
  let date = new Date();
  let hour = date.getHours().padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  //Update the particular day
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = days[date.getDay()];
  const day = document.getElementById("day");
  day.textContent = today;

  //Update to current time
  const time = document.getElementById("time");
  time.textContent = `${hour}: ${minutes}: ${seconds}`;

  //Convert meridian to either AM or PM
  const meridian = hour >= 12 ? "PM" : "AM";
  const meridianDisplay = document.getElementById("meridian-display");
  meridianDisplay.textContent = meridian;

  //Convert the meridian dynamically
  hour = hour % 12 || 12;
}

//Set an interval to update the date every second
setInterval(displayDate, 1000);

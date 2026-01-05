//A function to display the date
function displayDate() {
  //Create the date and time variables
  let date = new Date();
  let today = String(date.getDay());
  let hour = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  //Update the current day
  const day = document.getElementById("day");
  day.textContent = ``;

  //Update to current time
  const time = document.getElementById("time");
  time.textContent = `${hour}: ${minutes}: ${seconds}`;
}

//Set an interval to update the date every second
setInterval(displayDate, 1000);

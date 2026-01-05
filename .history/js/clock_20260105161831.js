//A function to display the date
function displayDate() {
  //Create the date and time variables
  let date = new Date();
  let hour = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  const actualTime = `Today's date is ${hour}:${minutes}:${seconds} now`;
  console.log(actualTime);
}

//Set an interval to update the date every second
setInterval(displayDate, 1000);

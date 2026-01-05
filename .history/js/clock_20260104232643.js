//Create the date and time variables
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//A function to display the date
function displayDate() {
  const actualTime = `Today's date is ${hour}:${minutes}:${seconds} now`;
}

console.log(actualTime);

//Set an interval to update the date every second
setInterval(displayDate, 1000);

console.log(`Today's date is ${hour}:${minutes}:${seconds}`);

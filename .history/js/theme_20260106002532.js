//Target the button element for the theme
const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

//Load theme display saved in the localStorage
const savedThemeDisplay = JSON.parse(localStorage.getItem("theme-display"));
console.log(typeof savedThemeDisplay);

//Create a function to handle the switching of themes
function switchThemeMode() {
  themeToggle.addEventListener("click", () => {
    const themeDisplay = document.body.classList.toggle("light-mode");

    //Toggle in between icons
    icon.classList.toggle("ri-sun-line");
    icon.classList.toggle("ri-contrast-2-line");

    //Save theme color in the localStorage
    localStorage.setItem("theme-display", themeDisplay);
  });
}

switchThemeMode();

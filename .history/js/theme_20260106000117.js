//Target the button element for the theme
const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("icon");

//Create a function to handle the switching of themes
function switchThemeMode() {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    icon.classList.toggle("ri-contrast-2-line");
  });
}

switchThemeMode();

//SWITCH THE SUN ICON TO MOON

//Target the

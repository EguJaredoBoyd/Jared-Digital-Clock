//Target the button element for the theme
const themeToggle = document.getElementById("theme-toggle");

//Create a function to handle the switching of themes
function switchThemeMode() {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

switchThemeMode();

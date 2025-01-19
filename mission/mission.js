// Select elements
const themeSelector = document.querySelector("#theme-selector");
const body = document.body;
const logo = document.querySelector("#logo");

// Function to switch themes
function changeTheme() {
    // Check the current value of the theme selector
    const selectedTheme = themeSelector.value;

    if (selectedTheme === "dark") {
        // Apply dark theme
        body.classList.add("dark");
        logo.src = "byui-logo-white.png"; // Change logo to white logo for dark theme
    } else {
        // Apply light theme
        body.classList.remove("dark");
        logo.src = "byui-logo-blue.png"; // Change logo back to blue logo for light theme
    }
}

// Add event listener to listen for theme changes
themeSelector.addEventListener('change', changeTheme);

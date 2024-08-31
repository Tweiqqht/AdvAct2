const toggle = document.getElementById("darkmode-toggle");
const themes = ["dark-theme", "light-theme", "beige-theme"];
var currentThemeIndex = 0;

toggle.onclick = function() {
    document.body.classList.remove(...themes);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.body.classList.add(themes[currentThemeIndex]);
};
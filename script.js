/* NAV BAR: Toggle hamburger menu */
function navBar() {
    var x = document.getElementById("myTopNav");
    x.classList.toggle("responsive");
    x.classList.toggle("open");
}

/* FOOTER: Get current year and display it in the footer */
window.addEventListener('load', function () {
    function getCurrentYear() {
        var year = new Date().getFullYear();
        document.getElementById("currentYear").textContent = year;
    }
    getCurrentYear();
});
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

/* TYPING EFFECT: Type out the text in the element with id "typed-text" */
document.addEventListener("DOMContentLoaded", function () {
    const text = "Explore my work and projects";
    const speed = 30; // typing speed in ms
    const p = document.getElementById("typed-text");

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            p.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            p.style.borderRight = "none"; // remove cursor at end
        }
    }

    typeWriter();
});

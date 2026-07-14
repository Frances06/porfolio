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

/* TYPING EFFECT: Type out the text in the elements with certain IDs */
function typeWriter(elementId, text, speed = 50) {
    const el = document.getElementById(elementId);
    el.textContent = ""; // clear existing text

    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            el.style.borderRight = "none"; // remove cursor at end
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("intro")) {
        typeWriter("intro", "Explore my work and projects", 30);
    }

    if (document.getElementById("about")) {
        typeWriter("about", "About Me", 40);
    }
});
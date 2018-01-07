var burger = (function burger() {
    "use strict";

    var burger, nav;

    function toggleCSS() {
        nav.classList.toggle("is-active");
        burger.classList.toggle("is-active");
        if (burger.classList.contains("is-active")) {
            burger.classList.replace("fa-bars", "fa-times");
        } else {
            burger.classList.replace("fa-times", "fa-bars");
        }
    }

    function initBurger(cible) {
        burger = document.getElementById("burger");
        nav = document.getElementById("nav");
        burger.onclick = toggleCSS;
    }

    window.addEventListener("DOMContentLoaded", initBurger);

    return {
        init: initBurger
    };
}());

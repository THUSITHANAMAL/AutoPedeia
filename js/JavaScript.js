let menu = document.queryselector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addeventlisener("click", function () {
    navbar.classlist.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}


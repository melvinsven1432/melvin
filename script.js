// let button = document.getElementById("button");
// function changePage(){
//     let navBar = document.querySelector(".navbar").style.display = "none";
// }
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
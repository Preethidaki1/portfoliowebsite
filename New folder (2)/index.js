let hamburgerEl = document.getElementById("hamburger");
let closeEl = document.getElementById("close");
let navLinks = document.getElementById("navlinks");

hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("hide");
    navLinks.classList.toggle("navlinks");
    closeEl.classList.toggle("unhide");
});
closeEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("hide");
    closeEl.classList.toggle("unhide");
    navLinks.classList.toggle("navlinks");
});
/*scroll*/
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });
  window.onscroll = () => {
    navbar.classList.remove('active');
  };
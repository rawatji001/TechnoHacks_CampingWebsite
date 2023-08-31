/*=============== SHOW MENU ===============*/
const menu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navclose = document.getElementById("nav-close");

// ------Showing------------------
if (navToggle) {
  navToggle.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

// ------Removing---------
if (navclose) {
  navclose.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
}
/*=============== SHOW MENU END ===============*/

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-links");

const linkWork = () => {
  menu.classList.remove("show-menu");
};

navLinks.forEach((n) => n.addEventListener("click", linkWork));
/*=============== REMOVE MENU MOBILE END ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeaderChange = () => {
  const header = document.getElementById("header");
  //When the scroll is greater than 50vh , add the bhHeader in header----------
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", bgHeaderChange);
/*=============== CHANGE BACKGROUND HEADER END ===============*/

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home-img2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home-img3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home-data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home-bird1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from(".home-bird2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from(".home-img1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home-img4", 1.2, { opacity: 0, x: 200, delay: 1.3 });
/*=============== GSAP ANIMATION END ===============*/

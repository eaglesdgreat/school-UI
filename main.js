// change navbar background style on scroll
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon svg");
    const line = icon.getElementsByTagName("line")[1]
    if (line.style.display !== "none") {
      line.style.display = "none"
    } else {
      line.style.display = "block"
    }
  })
});

// show/hide nav menu for tab and mobile
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// open nav
openBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});

// close nav
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);
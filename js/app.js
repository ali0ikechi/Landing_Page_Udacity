//Scroll bar
window.onscroll = function () {
  scrollBar();
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Dynamic Navbar
const ul = document.querySelector("#nav_list");
const section = document.querySelectorAll("section");
const navbarbuilder = () => {
  for (let i = 0; i < section.length; i++) {
    const listelement = document.createElement("li");
    const linkelement = document.createElement("a");
    linkelement.className = "menu_link";
    linkelement.textContent = `Section ${i + 1}`;
    linkelement.setAttribute("href", `#section${i + 1}`);
    listelement.appendChild(linkelement);
    ul.appendChild(listelement);
  }
};
window.addEventListener("DOMContentLoaded", navbarbuilder);

//Scroll to Sections
const scrollSmooth = () => {
  const navLinks = document.querySelectorAll(".menu_link");

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

scrollSmooth();

//SpyScrolling
const links = document.querySelectorAll(".menu_link");
const sections = document.querySelectorAll("section");

function SpyScrolling() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

SpyScrolling();
window.addEventListener("scroll", SpyScrolling);

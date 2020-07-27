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

//SpyScrolling

const links = document.querySelectorAll(".menu_link");
const sections = document.querySelectorAll(".active-section");

function spyScrolling() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

spyScrolling();
window.addEventListener("scroll", spyScrolling);

//Dynamic nav bar
const NavBar = document.getElementById("#nav_link");
const navCreator = () => {
  let navUI = "";
  allSection.forEach((section) => {
    const ID = section.id;
    const navData = section.dataset.nav;

    navUI += `<li><a class= "menu_link" href="#${ID}">${navData}</a></li>`;
  });

  allNav.innerHTML = navUI;
};

navCreator();

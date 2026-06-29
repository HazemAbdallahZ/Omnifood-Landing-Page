///////////////////////////////////////////////////////////
// Adding current year to the copyright
const currentYear = new Date().getFullYear();
var yearEl = document.querySelector(".year");
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Navigation menu button
const headerEl = document.querySelector(".header-nav");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const btnNavIconEl = document.querySelector(".mobile-nav-icon");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("menu-open");
  if (btnNavIconEl.getAttribute("name") == "menu-outline") {
    btnNavIconEl.setAttribute("name", "close-outline");
  } else {
    btnNavIconEl.setAttribute("name", "menu-outline");
  }
});

///////////////////////////////////////////////////////////
// Smooth Scrolling
const linksEl = document.querySelectorAll("a:link");
linksEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var href = link.getAttribute("href");
    if (href.startsWith("#") && href !== "#") {
      sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      const headerEl = document.querySelector(".header-nav");
      headerEl.classList.toggle("menu-open");
      if (btnNavIconEl.getAttribute("name") == "menu-outline") {
        btnNavIconEl.setAttribute("name", "close-outline");
      } else {
        btnNavIconEl.setAttribute("name", "menu-outline");
      }
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});

///////////////////////////////////////////////////////////
//Sticky Nav
const sectionHeroEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.querySelector("header").classList.add("sticky");
      document.querySelector(".hero").style.marginTop = "9.6rem";
    } else {
      document.querySelector("header").classList.remove("sticky");
      document.querySelector(".hero").style.marginTop = "0";
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

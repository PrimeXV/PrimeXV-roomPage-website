"use strict";

const swipeBtn = document.querySelector(".swiper-btn");
const infoContainer = document.querySelector(".info-container");
const allInfo = document.querySelectorAll(".info");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const navContainer = document.querySelector(".nav-container");
const navbar = document.querySelector("nav");
const room = document.querySelector(".room");
const listItems = document.querySelector("ul");
const allAnchor = document.querySelectorAll("a");
const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");

const over = document.createElement("div");
over.classList.add("fullscreen-overlay");
document.body.appendChild(over);

allAnchor.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);

hamburger.addEventListener("click", () => {
  over.style.display = "block";
  navbar.style.backgroundColor = "white";
  closeHamburger.style.display = "block";
  hamburger.style.display = "none";
  room.style.display = "none";
  listItems.style.visibility = "visible";
});

closeHamburger.addEventListener("click", () => {
  over.style.display = "none";
  navbar.style.backgroundColor = "transparent";
  hamburger.style.display = "block";
  closeHamburger.style.display = "none";
  listItems.style.visibility = "hidden";
  room.style.display = "block";
});

let slides = [slide1, slide2, slide3];
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.display = idx === i ? "block" : "none";
  });
}

leftArrow.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

rightArrow.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 710) {
    if (infoContainer && !infoContainer.contains(swipeBtn)) {
      infoContainer.appendChild(swipeBtn);
    }
  } else {
    if (navbar && !navbar.contains(swipeBtn)) {
      navbar.appendChild(swipeBtn);
    }
  }
});

// Initial check
window.dispatchEvent(new Event("resize"));

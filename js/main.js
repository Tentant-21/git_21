/* Banner con trasiciones */
window.onload = function () {
  setTimeout(function () {
    document.getElementById('hero-background').style.width = '100%';
  }, 1000);
  setTimeout(function () {
    document.getElementById('hero-text').style.opacity = '1';
  }, 1500);
  setTimeout(function () {
    document.getElementById('hero-img').style.opacity = '1';
  }, 2000);
  setTimeout(function () {
    document.getElementById('lines').style.opacity = '1';
  }, 4500);
}

/* Ir arriba - Botón*/
const buttonDown = document.getElementById("button-down");
buttonDown.addEventListener("click",() => {
  window.scrollTo(0,0);
});

/* Slider | Portafolio */

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn--right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout (function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length-1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout (function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function(){
  Next();
});

btnLeft.addEventListener("click", function(){
  Prev();
});

setInterval (function(){
  Next();
}, 3000);

/*----- SEARCH BOX -----*/
'use strict';

var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.previousElementSibling.value = '';
  });
});
/**/
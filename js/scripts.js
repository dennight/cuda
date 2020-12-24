'use strict';
// Active menu item on scroll
const links = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


// Change background menu on scroll
var header = document.querySelector('header')

window.onscroll = function () {

  if (window.pageYOffset > 0) {
    header.classList.add('scrolling')
  } else {
    header.classList.remove('scrolling')
  }
};


// Hamburger
var hamburger = document.querySelector(".hamburger");
var navbar = document.getElementById("nav");  
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("is-open");
  header.classList.toggle("show");
});


"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const logo = document.querySelector('.geen');
const navContainer = document.querySelector('.nav__container');
const form = document.querySelector('.form');
const video = document.getElementById('video');

//
//  Mobile & Desktop menu animation
//

mobileMenu.addEventListener('click', ()=>{
  nav.classList.toggle('is__visible');
  body.classList.toggle('push__left');
  header.classList.toggle('push__left');
});

navContainer.addEventListener('click', ()=>{
  if(window.innerWidth < 768){
    nav.classList.toggle('is__visible');
    body.classList.toggle('push__left');
    header.classList.toggle('push__left');
  }
});
window.addEventListener('scroll', function() {
  if(window.scrollY){
    header.classList.add('is__sticky');
    navContainer.classList.add('sticky');
    logo.classList.add('logo__small');
  }else if(!window.scrollY){
    header.classList.remove('is__sticky');
    navContainer.classList.remove('sticky');
    logo.classList.remove('logo__small');
  }
});

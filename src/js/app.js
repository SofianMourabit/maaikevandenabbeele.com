"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
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

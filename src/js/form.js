"use strict"
const mobileMenu = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navContainer = document.querySelector('.nav__container');
const video = document.getElementById('video');




//
// Contact Form animation
//
//
const form = document.querySelector('.form');
const formInput = document.querySelectorAll('.form input');
const message = document.querySelector('#message'); // Spam bot protection fiels
const msg = document.querySelector('#msg');

form.addEventListener('focusin', (e) => {
  const input = e.target;
  const label = e.target.previousElementSibling;
  if(label && label.tagName === "LABEL"){
    label.classList.toggle('push__up');
  }
});

function hideLabel(inputName){
  inputName.previousElementSibling.classList.add('is__hidden');
}
function showLabel(inputName){
  inputName.previousElementSibling.classList.remove('is__hidden');
}

form.addEventListener('focusout', (e) =>{
  const label = e.target.previousElementSibling;
  if(label && label.tagName === "LABEL"){
    label.classList.toggle('push__up');
  }
  for(let i=0; i < formInput.length; i++){
    if(formInput[i].value){
      hideLabel(formInput[i]);
    }else{
      showLabel(formInput[i]);
    }
  }
  if(msg.value){
    hideLabel(msg);
  }else{
    showLabel(msg);
  }
});

// //
// // Seding Contact Form Email
// //

const fullName = document.querySelector('#fullName');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const buttonContainer = document.querySelector('.form__fieldset--button');
const button = document.querySelector('.form__button');

function getFormData() {
  let data = {
    fullName: [fullName.value],
    phone: [phone.value],
    email: [email.value],
    message: [msg.value]
  };
  return data;
}
function handleFormSubmit(event) {
  event.preventDefault();
  if(!message.value){
    buttonContainer.removeChild(button);
    const replaceButton = `<button type="submit" class="form__button--disabled" disabled>
    <svg class="form__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M12.655 11.167C5.051 18.14 4.54 29.959 11.512 37.564l2.999-2.75c-5.455-5.948-5.056-15.194.894-20.65l-2.75-2.997z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
  </button>`;
  buttonContainer.insertAdjacentHTML('afterbegin',replaceButton);
  const data = getFormData();
  const url = event.target.action;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        form.style.display = 'none';
        document.querySelector('#contact__title').innerHTML= 'Message Sent!';
        document.querySelector('#contact__text').innerHTML= 'Thank you for getting in touch. I will get back to you shortly.';
        const contact = document.querySelector('.contact');
        const checkImage = `<div class="form__check">
        <svg class="form__icon--big">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite/sprite.svg#svg--check"></use>
        </svg>
      </div>`;
      contact.insertAdjacentHTML('afterbegin',checkImage);

      return;
    }
  }
};
let encoded = Object.keys(data).map(function(k) {
  return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
}).join('&')
xhr.send(encoded);
}
}

form.addEventListener("submit", handleFormSubmit, false);

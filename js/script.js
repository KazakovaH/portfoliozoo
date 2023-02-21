/*burger----------------------------------*/
let burgerMenu = document.querySelector('.burger');
let navMenu= document.querySelector('.header__nav');

burgerMenu.onclick = function(){
  this.classList.toggle('active');  
  navMenu.classList.toggle('open');
}


/**----------------------------------- */
let coll = document.getElementsByClassName("collapsible");
let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

/**-------------сохр в -localStorage------------------ */
let formData = {};
const form = document.querySelector('form');
const LS = localStorage;


form.addEventListener('input', function(event){
  //console.log(event.target.value);
  //console.log(event.target.name);
  formData[event.target.name] = event.target.value;
  //console.log(formData);
  LS.setItem('formData', JSON.stringify(formData));
});
//проверим есть ли с таким ключем
if(LS.getItem('formData')){
  formData = JSON.parse(LS.getItem('formData'));
  
}

/*------------------------------------------------ */

let span = document.querySelector('.span');
let span2 = document.querySelector('.span2');

let username = document.querySelector('.username');
let userphone = document.querySelector('.userphone');
let btn = document.querySelector('.button');
const forma = document.querySelector('form');

forma.addEventListener('submit',function(e){
  e.preventDefault();

let reg = /^(([а-яА-ЯЁёІі' -]{1,30}))$/u;

if(!reg.test(username.value)){
  username.style.border = "2px solid red";
  span.innerHTML = 'Только кириллица';
  username.focus();
  return
}else{
  username.style.border = "2px solid green";
  span.innerHTML = ' ';
}

let reg2 = /^\s*\+?375((33\d{7})|(29\d{7})|(44\d{7}|)|(25\d {7}))\s*$/g;

if(!reg2.test(userphone.value)){
  userphone.style.border = '2px solid red';
  span2.innerHTML = 'В формате +375---------';
  userphone.focus();
  return
}else{
  userphone.style.border = '2px solid green';
  span2.innerHTML = ' ';
}

alert('Зявку на звонок оставил(а)' + ' '+ username.value + ' ' + '+'+ ' ' + userphone.value);
});








/**page4-------------------------------------------- */

let popupBtn = document.querySelector('.popup_btn');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup_close');

popupBtn.onclick = function(){
  popup.style.display = 'block';
}
popupClose.onclick = function(){
  popup.style.display = 'none';
}
window.onclick = function(event){
  if(event.target === popup){
  popup.style.display = 'none';

  }
}

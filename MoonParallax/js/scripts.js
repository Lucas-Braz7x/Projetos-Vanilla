let stars = document.getElementById('stars'); 
let moon = document.getElementById('moon'); 
let text = document.getElementById("text")
let btn = document.querySelector(".btn");
let mountains ={
  behind: document.getElementById('mountains_behind'),
  front: document.getElementById('mountains_front'),
} 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  stars.style.left = value + "px"; 
  moon.style.top = value*1.05 + "px"; 
  mountains.behind.style.top = value*0.5 + "px"; 
  mountains.front.style.top = value*0 + "px"; 
  text.style.marginRight = value*4 + "px"; 
  text.style.marginTop = value*1.5 + "px"; 
  btn.style.marginTop = value*1.5 + "px"; 
  header.style.top = value*0.5 + 'px';
})
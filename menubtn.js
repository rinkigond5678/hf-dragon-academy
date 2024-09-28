// responsive nav menu button js here -----------------------------------

const menu_btn = document.querySelector('.menu_btn');
const menu_nav = document.querySelector('.menu_nav');
menu_btn.addEventListener('click', ()=>{
  console.log("hello");
  menu_nav.classList.toggle('hidden');
  console.log("hello");

})


const responsive_menu = document.querySelector('.responsive_menu');
 responsive_menu.addEventListener('click',()=>{
  menu_nav.classList.toggle('hidden');
  console.log("hello");
  
 })


// ----------------------------------------------------------------------
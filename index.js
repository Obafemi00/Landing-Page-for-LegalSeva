'use strict'
let btn = document.querySelector('.hamburger-icon')

let dropdown = document.querySelector('.link-items')
// dropdown.style.display = "none"
btn.addEventListener("click",function(e){
  if (dropdown.style.display !== "none")
     {dropdown.style.display = "none"}
  else {dropdown.style.display = "flex"} 
})


// The preloader
let loader = document.getElementById("preloader")

window.addEventListener("load", function(){
  loader.style.display ="none"
})

// The scroll effect on the navabar
window.addEventListener("scroll",function () {
let header = document.getElementById("nav")
let windowPosition = window.scrollY > 0;
header.classList.toggle("scrolling-active",windowPosition)

})


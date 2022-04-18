'use strict'
let btn = document.querySelector('.hamburger-icon')

let dropdown = document.querySelector('.link-items')
// dropdown.style.display = "none"
btn.addEventListener("click",function(e){
  if (dropdown.style.display !== "none")
     {dropdown.style.display = "none"}
  else {dropdown.style.display = "flex"} 
})

let loader = document.getElementById("preloader")

window.addEventListener("load", function(){
  loader.style.display ="none"
})

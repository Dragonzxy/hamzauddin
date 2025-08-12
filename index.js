let optionbtn = document.querySelector("#break-point");
let navMobile = document.querySelector("#nav-mobile");
optionbtn.addEventListener("click", e=>{
    e.preventDefault();
    
    navMobile.classList.toggle("show-nav-mobile")
    navMobile.classList.toggle("nav-mobile")
})

let body =document.body;
const themeButton = document.querySelectorAll(".theme-button");
const darkIcon =document.querySelectorAll(".dark-icon");
const lightIcon =document.querySelectorAll(".light-icon");


themeButton.forEach(btn =>{
 btn.addEventListener("click", e=>{
    e.preventDefault()
    body.classList.toggle("light-mode")

    darkIcon.classList.toggle("hide-icon") 
    
    lightIcon.classList.toggle("hide-icon") 
    
 })

})

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".toggle-menu"); // your menu selector
  const toggleBtn = document.querySelector(".toggle-btn"); // your toggle button selector

  // If click is NOT inside menu and NOT on the toggle button
  if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
    menu.classList.remove("active"); // or whatever class opens your menu
  }
});


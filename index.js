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

    darkIcon.forEach(btn=>{
     btn.classList.toggle("hide-icon") 
    })
    lightIcon.forEach(btn=>{
     btn.classList.toggle("hide-icon") 
    })
 })

})

document.addEventListener("click", (e)=> {
  const menu = document.querySelector("#nav-mobile"); // your menu selector
  const toggleBtn = document.querySelector("#break-point"); // your toggle button selector

  // If click is NOT inside menu and NOT on the toggle button
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.toggle("show-nav-mobile");
     navMobile.classList.toggle("nav-mobile")  // or whatever class opens your menu
  }
});





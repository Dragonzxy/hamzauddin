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


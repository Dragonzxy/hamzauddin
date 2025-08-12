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


let startX = 0;
let endX = 0;

function toggleNavMobile() {
  navMobile.classList.toggle("show-nav-mobile")
    navMobile.classList.toggle("nav-mobile")
  
}

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const navMobile = document.getElementById("nav-mobile");
  const swipeDistance = endX - startX;

  if (swipeDistance > 50) {
    // Swipe right → open menu
    navMobile.classList.add("show-nav-mobile");
      navMobile.classList.toggle("nav-mobile")
  } else if (swipeDistance < -50) {
    // Swipe left → close menu
    navMobile.classList.remove("show-nav-mobile")
      navMobile.classList.toggle("nav-mobile")
  }
}




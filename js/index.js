// Your code goes here
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault()
  })
// mouseover .logo-heading
document.querySelector('.logo-heading').addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
    event.stopPropagation()
})
document.querySelector('.logo-heading').addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation()
})
// onclick .nav-link
const newNav = document.querySelectorAll(".nav-link")
newNav.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.style.color = "blue";
    })
})
// load .intro
document.querySelector(".intro h2").addEventListener("dblclick", (event) => {
    event.target.style.fontSize = "5rem";
})
// wheel .intro p
document.querySelector(".intro p").addEventListener("wheel", (event) => {
    event.target.style.background = "green";
    event.target.style.color = "white";
})
// keydown .content-section .text-content h2
const newLetsGo = document.querySelector(".content-section .text-content h2")
document.addEventListener('keydown', (event) => {
    if (event.key === 'e') {
        // This changes the text design when pressing the event key 'e'
        newLetsGo.textContent = 'You pressed "e" so this changed!!!';
        newLetsGo.style.color = 'red';
        newLetsGo.style.fontSize = '6rem';
        newLetsGo.style.textTransform = 'uppercase';
    }
})
// load window
window.addEventListener('load', (event) => {
    console.log("Hello World!")
});
//auxclick img
const newImg = document.querySelectorAll("img")
newImg.forEach((item) => {
    item.addEventListener("auxclick", (event) => {
        event.target.style.display = "none";
    })
})
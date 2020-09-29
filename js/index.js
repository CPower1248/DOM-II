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
// keydown .intro p
document.querySelector(".intro p").addEventListener("wheel", (event) => {
    event.target.style.color = "green";
})
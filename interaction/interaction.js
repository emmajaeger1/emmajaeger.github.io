var box= document.querySelector ("box")

console.log(box)

box.addEventListener("click", onBoxClick)

function onBoxClick() {
  box.style.backgroundColor="blue"
}

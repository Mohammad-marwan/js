

var change = document.querySelector("div");
var changesizeLbtn = document.querySelector(".changesizeL");
var changesizeSbtn = document.querySelector(".changesizeS");
function large() {
    change.classList.add("changesizeL");
    change.classList.remove("changesizeSbtn");
  
}
function small() {
    change.classList.add("changesizeS")
    change.classList.remove("changesizeLbtn");
}
changesizeLbtn.onclick = large;
changesizeSbtn.onclick =small;

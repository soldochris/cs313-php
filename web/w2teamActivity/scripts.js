//getting elements from the DOM
const clickmeBtn = document.getElementById("clickmeBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const userColor = document.getElementById("userColor");
const firstDiv = document.getElementById("firstDiv");

//events Listeners
clickmeBtn.addEventListener("click",displayMessage);
changeColorBtn.addEventListener("click",changeColor);

//declaring functions
function displayMessage(){
  alert("Clicked!");
}

function changeColor(){
  firstDiv.style.backgroundColor = userColor.value;
}

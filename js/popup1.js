// popupforindex1

var popup = document.getElementsByClassName("popup__search");
var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var img = document.getElementsByClassName("close")[0];
// var body = document.getElementsByClassName("body")["0"];

button.onclick = function() {
  button.style.display = "none"
  modal.style.display = "block"
  img.style.display = "block"
}
img.onclick = function() {
  modal.style.display = "none"
  button.style.display = "block"
  img.style.display = "none"
}
popup.onclick = function() {
  button.style.display = "block"
}
var modalTwo = document.getElementById("modalTwo");
var modalBtn = document.getElementById("modalTwoBtn");
var modalBtnT = document.getElementById("modalTBtn");
var modalBtnTw = document.getElementById("modalTwBtn");
var modaClose = document.getElementsByClassName("modal-two__close")[0];

modalBtn.onclick = function() {
  modalTwo.style.display = "block";
  modalBtn.style.display = "none";
  modalBtnT.style.display = "none";
  modalBtnTw.style.display = "none";
  modalEmp.style.display = "none";
}
modalBtnT.onclick = function() {
  modalTwo.style.display = "block";
  modalBtn.style.display = "none";
  modalBtnT.style.display = "none";
  modalBtnTw.style.display = "none";
  modalEmp.style.display = "none";
}
modalBtnTw.onclick = function() {
  modalTwo.style.display = "block";
  modalBtn.style.display = "none";
  modalBtnT.style.display = "none";
  modalBtnTw.style.display = "none";
  modalEmp.style.display = "none";
}
modaClose.onclick = function() {
  modalTwo.style.display = "none";
  modalBtn.style.display = "flex";
  modalBtnT.style.display = "flex";
  modalBtnTw.style.display = "flex";
  modalEmp.style.display = "block";
}

// body.onclick = function() {
//   modal.style.display = "none"
//   button.style.display = "block"
//   img.style.display = "none"
// }
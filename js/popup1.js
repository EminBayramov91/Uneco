// popupforindex1

var popup = document.getElementsByClassName("popup__search");
var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var img = document.getElementsByClassName("close")[0];

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



window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"
    img.style.display = "none"
    button.style.display = "block";
  }
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}


var activeFour = document.getElementById("activeFour")
var defaultFour = document.getElementById("defaultFour")
var activeFive = document.getElementById("activeFive")
var defaultFive = document.getElementById("defaultFive")
var activeSix = document.getElementById("activeSix")
var defaultSix = document.getElementById("defaultSix")
var activeSeven = document.getElementById("activeSeven")
var defaultSeven = document.getElementById("defaultSeven")
var activeEight = document.getElementById("activeEight")
var defaultEight = document.getElementById("defaultEight")
var activeNine = document.getElementById("activeNine")
var defaultNine = document.getElementById("defaultNine")
var activeTen = document.getElementById("activeTen")
var defaultTen = document.getElementById("defaultTen")
var activeEleven = document.getElementById("activeEleven")
var defaultEleven = document.getElementById("defaultEleven")
var activeTwelve = document.getElementById("activeTwelve")
var defaultTwelve = document.getElementById("defaultTwelve")
var activeThirteen = document.getElementById("activeThirteen")
var defaultThirteen = document.getElementById("defaultThirteen")
var activeFourteen = document.getElementById("activeFourteen")
var defaultFourteen = document.getElementById("defaultFourteen")

defaultFour.onclick = function () {
  activeFour.style.display = "block"
  defaultFour.style.display = "none"
}
activeFour.onclick = function () {
  activeFour.style.display = "none"
  defaultFour.style.display = "block"
}
defaultFive.onclick = function () {
  activeFive.style.display = "block"
  defaultFive.style.display = "none"
}
activeFive.onclick = function () {
  activeFive.style.display = "none"
  defaultFive.style.display = "block"
}
defaultSix.onclick = function () {
  activeSix.style.display = "block"
  defaultSix.style.display = "none"
}
activeSix.onclick = function () {
  activeSix.style.display = "none"
  defaultSix.style.display = "block"
}
defaultSeven.onclick = function () {
  activeSeven.style.display = "block"
  defaultSeven.style.display = "none"
}
activeSeven.onclick = function () {
  activeSeven.style.display = "none"
  defaultSeven.style.display = "block"
}
defaultEight.onclick = function () {
  activeEight.style.display = "block"
  defaultEight.style.display = "none"
}
activeEight.onclick = function () {
  activeEight.style.display = "none"
  defaultEight.style.display = "block"
}
defaultNine.onclick = function () {
  activeNine.style.display = "block"
  defaultNine.style.display = "none"
}
activeNine.onclick = function () {
  activeNine.style.display = "none"
  defaultNine.style.display = "block"
}
defaultTen.onclick = function () {
  activeTen.style.display = "block"
  defaultTen.style.display = "none"
}
activeTen.onclick = function () {
  activeTen.style.display = "none"
  defaultTen.style.display = "block"
}
defaultEleven.onclick = function () {
  activeEleven.style.display = "block"
  defaultEleven.style.display = "none"
}
activeEleven.onclick = function () {
  activeEleven.style.display = "none"
  defaultEleven.style.display = "block"
}
defaultTwelve.onclick = function () {
  activeTwelve.style.display = "block"
  defaultTwelve.style.display = "none"
}
activeTwelve.onclick = function () {
  activeTwelve.style.display = "none"
  defaultTwelve.style.display = "block"
}
defaultThirteen.onclick = function () {
  activeThirteen.style.display = "block"
  defaultThirteen.style.display = "none"
}
activeThirteen.onclick = function () {
  activeThirteen.style.display = "none"
  defaultThirteen.style.display = "block"
}
defaultFourteen.onclick = function () {
  activeFourteen.style.display = "block"
  defaultFourteen.style.display = "none"
}
activeFourteen.onclick = function () {
  activeFourteen.style.display = "none"
  defaultFourteen.style.display = "block"
}
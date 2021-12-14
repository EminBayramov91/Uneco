var unionModal = document.getElementById("unionModal");
var unionBtn = document.getElementById("unionBtn");
var unionClose = document.getElementsByClassName("union-close")[0];
unionBtn.onclick = function() {
  unionModal.style.display = "block";
}
unionClose.onclick = function() {
  unionModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == unionModal) {
    unionModal.style.display = "none";
  }
}
var unionModalF = document.getElementById("unionModalF");
var unionBtnF = document.getElementById("unionBtnF");
var unionCloseF = document.getElementsByClassName("union-close-f")[0];
unionBtnF.onclick = function() {
  unionModalF.style.display = "block";
}
unionClose.onclick = function() {
  unionModalF.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == unionModalF) {
    unionModalF.style.display = "none";
  }
}
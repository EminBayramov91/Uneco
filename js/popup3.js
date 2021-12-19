var unionModal = document.getElementById("unionModal");
var unionBtnFirst = document.getElementById("unionBtnFirst");
var unionBtnSecond = document.getElementById("unionBtnSecond");
var unionClose = document.getElementsByClassName("union__close")[0];
unionBtnFirst.onclick = function () {
  unionModal.style.display = "block";
  unionBtnFirst.style.background = "#FF7C07"
  unionBtnFirst.style.color = "#fff"
}
unionBtnSecond.onclick = function () {
  unionModal.style.display = "block";
  unionBtnSecond.style.background = "#FF7C07"
  unionBtnSecond.style.color = "#fff"
}
unionClose.onclick = function () {
  unionModal.style.display = "none";
  unionBtnFirst.style.background = "#F2F2F2"
  unionBtnFirst.style.color = "#000"
  unionBtnSecond.style.background = "#F2F2F2"
  unionBtnSecond.style.color = "#000"
}
window.onclick = function (event) {
  if (event.target == unionModal) {
    unionModal.style.display = "none"
    unionBtnFirst.style.background = "#F2F2F2"
    unionBtnFirst.style.color = "#000"
    unionBtnSecond.style.background = "#F2F2F2"
    unionBtnSecond.style.color = "#000";
  }
}



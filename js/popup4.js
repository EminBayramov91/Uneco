


var notBtnDefault = document.getElementById("notBtnDefault")
var notBtnClose = document.getElementById("notBtnClose")
var notModal = document.getElementById("notModal")

var notBtnFirst = document.getElementById("notBtnFirst")
var notFirst = document.getElementById("notFirst")
var notBtnSecond = document.getElementById("notBtnSecond")
var notSecond = document.getElementById("notSecond")

var notBtnThird = document.getElementById("notBtnThird")
var notThird = document.getElementById("notThird")

var notBtnFourth = document.getElementById("notBtnFourth")
var notFourth = document.getElementById("notFourth")
var body = document.getElementById("bodyId")

var notCloseFirst = document.getElementsByClassName("not__close-btn")["0"]
var notCloseSecond = document.getElementsByClassName("not__close-btn-two")["0"]
var notCloseThree = document.getElementsByClassName("not__close-btn-three")["0"]
var notCloseFourth = document.getElementsByClassName("not__close-btn-four")["0"]
var body = document.getElementsByClassName("body")["0"]

notBtnDefault.onclick = function() {
    notModal.style.display = "block"
    notBtnDefault.style.display = "none"
    notBtnClose.style.display = "block"
}
notBtnClose.onclick = function() {
    notModal.style.display = "none"
    notBtnDefault.style.display = "block"
    notBtnClose.style.display = "none"
}



notBtnFirst.onclick = function() {
    notFirst.style.display = "block"
    notBtnFirst.style.display = "none"
    notBtnSecond.style.display = "none"
    notBtnThird.style.display = "none"
    notBtnFourth.style.display = "none"
    notModal.style.width = "576px"
    notModal.style.height = "480px"
}
notCloseFirst.onclick = function() {
    notFirst.style.display = "none"
    notBtnFirst.style.display = "flex"
    notBtnSecond.style.display = "flex"
    notBtnThird.style.display = "flex"
    notBtnFourth.style.display = "flex"
    notModal.style.width = "391px"
    notModal.style.height = "277px"
}


notBtnSecond.onclick = function() {
    notSecond.style.display = "block"
    notBtnFirst.style.display = "none"
    notBtnSecond.style.display = "none"
    notBtnThird.style.display = "none"
    notBtnFourth.style.display = "none"
    notModal.style.width = "576px"
    notModal.style.height = "480px"
}
notCloseSecond.onclick = function() {
    notSecond.style.display = "none"
    notBtnFirst.style.display = "flex"
    notBtnSecond.style.display = "flex"
    notBtnThird.style.display = "flex"
    notBtnFourth.style.display = "flex"
    notModal.style.width = "391px"
    notModal.style.height = "277px"
}


notBtnThird.onclick = function() {
    notThird.style.display = "block"
    notBtnFirst.style.display = "none"
    notBtnSecond.style.display = "none"
    notBtnThird.style.display = "none"
    notBtnFourth.style.display = "none"
    notModal.style.width = "576px"
    notModal.style.height = "480px"
}
notCloseThree.onclick = function() {
    notThird.style.display = "none"
    notBtnFirst.style.display = "flex"
    notBtnSecond.style.display = "flex"
    notBtnThird.style.display = "flex"
    notBtnFourth.style.display = "flex"
    notModal.style.width = "391px"
    notModal.style.height = "277px"
}


notBtnFourth.onclick = function() {
    notFourth.style.display = "block"
    notBtnFirst.style.display = "none"
    notBtnSecond.style.display = "none"
    notBtnThird.style.display = "none"
    notBtnFourth.style.display = "none"
    notModal.style.width = "576px"
    notModal.style.height = "480px"
}
notCloseFourth.onclick = function() {
    notFourth.style.display = "none"
    notBtnFirst.style.display = "flex"
    notBtnSecond.style.display = "flex"
    notBtnThird.style.display = "flex"
    notBtnFourth.style.display = "flex"
    notModal.style.width = "391px"
    notModal.style.height = "277px"
}

body.onclick = function() {
    notModal.style.display = "none"
    notBtnDefault.style.display = "block"
    notBtnClose.style.display = "none"
    modal.style.display = "none"
    button.style.display = "block"
    img.style.display = "none"
}
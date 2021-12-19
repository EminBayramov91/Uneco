

var activeOne = document.getElementById("activeOne")
var defaultOne = document.getElementById("defaultOne")
var activeTwo = document.getElementById("activeTwo")
var defaultTwo = document.getElementById("defaultTwo")
var activeThree = document.getElementById("activeThree")
var defaultThree = document.getElementById("defaultThree")


defaultOne.onclick = function () {
    activeOne.style.display = "block"
    defaultOne.style.display = "none"
}
activeOne.onclick = function () {
    activeOne.style.display = "none"
    defaultOne.style.display = "block"
}
defaultTwo.onclick = function () {
    activeTwo.style.display = "block"
    defaultTwo.style.display = "none"
}
activeTwo.onclick = function () {
    activeTwo.style.display = "none"
    defaultTwo.style.display = "block"
}
defaultThree.onclick = function () {
    activeThree.style.display = "block"
    defaultThree.style.display = "none"
}
activeThree.onclick = function () {
    activeThree.style.display = "none"
    defaultThree.style.display = "block"
}



var twoActive = document.getElementById("twoActive")
var twoDefault = document.getElementById("twoDefault");
twoDefault.onclick = function () {
    twoActive.style.display = "block"
    twoDefault.style.display = "none"
}
twoActive.onclick = function () {
    twoActive.style.display = "none"
    twoDefault.style.display = "block"
};
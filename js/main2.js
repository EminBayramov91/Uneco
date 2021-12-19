var oneActive = document.getElementById("oneActive");
var oneDefault = document.getElementById("oneDefault");
oneDefault.onclick = function () {
    oneActive.style.display = "block"
    oneDefault.style.display = "none"
};
oneActive.onclick = function () {
    oneActive.style.display = "none"
    oneDefault.style.display = "block"
};


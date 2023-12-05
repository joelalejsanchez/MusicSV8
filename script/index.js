var btnModal = document.getElementById("btnLogin")
var modal = document.getElementById("Login");



btnModal.onclick = function () {
    modal.style.display = "flex";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}

var imasong = document.getElementById("imgsong")
var skip = document.getElementById("skip")
var imgbg = document.getElementById("imgbg")

let i = 2
skip.onclick = function () {
    imasong.style.animationName = "skip"
    imasong.style.animationDuration = "2s"
    imasong.onanimationend = function () {
        imasong.style.animationName = ""
        imasong.style.animationDuration = ""
        if (i == 5) {
            i = 1
        }
        imasong.src = "Imagenes Proyecto/Portdas/portada" + i + ".jpeg"
        imgbg.src = "Imagenes Proyecto/Portdas/portada" + i + ".jpeg"
        i += 1
    }
}


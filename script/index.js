let Artistas = [
    { nameA: 'Artista1', imgPerA: 'Imagenes_Proyecto/Portdas/portada1.jpeg' },
    { nameA: 'Artista2', imgPerA: 'Imagenes_Proyecto/Portdas/portada2.jpeg' },
    { nameA: 'Artista3', imgPerA: 'Imagenes_Proyecto/Portdas/portada3.jpeg' },
    { nameA: 'Artista4', imgPerA: 'Imagenes_Proyecto/Portdas/portada4.jpeg' },
    { nameA: 'Artista5', imgPerA: 'Imagenes_Proyecto/Portdas/portada2.jpeg' },
]


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
        imasong.src = "Imagenes_Proyecto/Portdas/portada" + i + ".jpeg"
        imgbg.src = "Imagenes_Proyecto/Portdas/portada" + i + ".jpeg"
        i += 1
    }
}




function CardArtis(name, imgPerfil) {
    let CardArt = document.createElement('div')
    CardArt.className = 'Mix'
    CardArt.innerHTML = `
    <img class="imgcard" src="${imgPerfil}"></img>
    <h3>${name}</h3>
    `
    return CardArt
}
let albunesconten = document.querySelector(".albunes")

let albunes = [
    { name: "Sensillos", id: 1, portada: "Imagenes_Proyecto/imgp.png", lanzamiento: '10-5-2020' },
    { name: "Album 1", id: 1, portada: "Imagenes_Proyecto/Portdas/portada2.jpeg", lanzamiento: '10-5-2020' },
    { name: "Album 2", id: 1, portada: "Imagenes_Proyecto/Portdas/portada1.jpeg", lanzamiento: '10-5-2020' },
]
let fragment = document.createDocumentFragment()


for (const album of albunes) {
    fragment.append(cartAlbum(album.name, album.portada, album.lanzamiento))
}

albunesconten.append(fragment)



function cartAlbum(name, portada, lanzamiento) {
    let cart = document.createElement("div")
    cart.className = "albunes--album"
    cart.innerHTML = `
    <img src=${portada} alt="">
    <div class="albunes--album__inf">
        <h3>${name}</h3>
        <div>
            <p>Lanzamiento</p>
            <p id="AlbLan">${lanzamiento}</p>
        </div>
        <div>
            <p>Reproducciones</p>
            <p>10.324</p>
        </div>
    </div>
    `
    return cart
}

var btnCreate = document.getElementById('BtnCreateAlbum')
var modalcreate = document.getElementById('CreateAlbum')
btnCreate.click = function () {
    modalcreate.style.display = "flex"
}
window.onclick = function (e) {
    if (e.target == modalcreate) {
        modalcreate.style.display = "none"
    }
}
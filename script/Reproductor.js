let playlists = [
    {
        namelist: 'Tus me gusta',
        portadalist: 'Imagenes_Proyecto/imgp.png',
        listsongs: [
            {
                namesong: 'Romilar',
                portadasong: 'Imagenes_Proyecto/Portdas/portada6.jpeg',
                artissong: 'rickyedit',
                albumsong: 'esras to esto',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Out of My Mind',
                portadasong: 'Imagenes_Proyecto/Portdas/portada2.jpeg',
                artissong: 'Gentramel',
                albumsong: 'Out of My Mind',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Cinturon gris',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'YANO+',
                portadasong: 'Imagenes_Proyecto/Portdas/portada4.jpeg',
                artissong: 'rodesel',
                albumsong: 'YANO+',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Chivo Expiatorio',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Ciudad sin alma',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Fantasma',
                portadasong: 'Imagenes_Proyecto/Portdas/portada1.jpeg',
                artissong: 'Cyclo',
                albumsong: 'Fantasma',
                fechapubli: '30 sep 2023',
                duracion: '3:20',
                like: true
            }
        ]
    },
    {
        namelist: 'Lamina 11',
        portadalist: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
        listsongs: [
            {
                namesong: 'Flan',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: false
            },
            {
                namesong: 'Cinturon Gris',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Frankenstein',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: false
            },
            {
                namesong: 'Chivo Expiatorio',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Ciudad sin alma',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'Roshomo',
                portadasong: 'Imagenes_Proyecto/Portdas/portada3.jpeg',
                artissong: 'Cuarteto de Nos',
                albumsong: 'Lamina 11',
                fechapubli: '30 sep 2021',
                duracion: '3:20',
                like: false
            },
        ]
    },
    {
        namelist: 'eras to esto',
        portadalist: 'Imagenes_Proyecto/Portdas/portada6.jpeg',
        listsongs: [
            {
                namesong: 'Romilar',
                portadasong: 'Imagenes_Proyecto/Portdas/portada6.jpeg',
                artissong: 'rickyedit',
                albumsong: 'eras to esto',
                fechapubli: '30 nov 2023',
                duracion: '3:20',
                like: true
            },
            {
                namesong: 'blue',
                portadasong: 'Imagenes_Proyecto/Portdas/portada6.jpeg',
                artissong: 'rickyedit',
                albumsong: 'eras to esto',
                fechapubli: '30 nov 2023',
                duracion: '3:20',
                like: false
            },
            {
                namesong: 'manzana',
                portadasong: 'Imagenes_Proyecto/Portdas/portada6.jpeg',
                artissong: 'rickyedit',
                albumsong: 'eras to esto',
                fechapubli: '30 nov 2023',
                duracion: '3:20',
                like: false
            },
        ]
    }
]

$(document).ready(function () {

    let i = 0;

    let biblioteca = document.createDocumentFragment()
    for (let item of playlists) {
        biblioteca.append(CreateMyPlaylists(item.namelist, item.namelist, item.portadalist))
    }
    $('#playlist').append(biblioteca);
    CargarPlaylist(i)

    $(".PList").click(function (e) {
        $('#Playlist--Table__List').empty();
        console.log(e.currentTarget.id)
        i = playlists.indexOf(playlists.find(function (pl) {
            return pl.namelist == e.currentTarget.id;
        }))
        console.log(i)
        CargarPlaylist(i)
    });

    // document.addEventListener("DOMContentLoaded", function () {
    //     let home = document.getElementById('ahome');
    //     home.addEventListener("click", function (e) {
    //         e.preventDefault()

    //         console.log('no se recargo la pagina')
    //     });
    // })

    let playact;

    $("#Playlist--Table__List").click(function (e) {
        if (playact != undefined) {
            $(playact).parent().removeClass('Play');
        }
        playact = e.target
        $(e.target).parent().addClass('Play');
        let ns = $('.Play').children(":eq(1)").text();
        let img = $('.Play #ImgSong__').attr("src");
        $("#Rp img").attr('src', img);
        $("#imgbg").attr('src', img);
        $('#RepNameSong').text(ns);
        $('#Name').children(":eq(1)").text($('.Play').children(":eq(2)").text());
    });



});

function CargarPlaylist(id) {
    $("#ListPortada").attr('src', playlists[id].portadalist);
    $("#Listtitle").text(playlists[id].namelist);
    $("#Listdesc").text(playlists[id].descriplist);
    let canciones = document.createDocumentFragment()
    for (const item of playlists[id].listsongs) {
        canciones.append(songadd(item.namesong, item.portadasong, item.artissong, item.albumsong, item.fechapubli, item.duracion, item.like))
    }
    $("#Playlist--Table__List").append(canciones);
    $(".btnlike").click(function (e) {
        let nas = $(this).parent().parent().children(":eq(1)").text()
        if ($(this).hasClass("fa-solid")) {
            console.log('tine like');
            $(this).removeClass("fa-solid")
            $(this).addClass("fa-regular");
            let selecs = playlists[0].listsongs.indexOf(playlists[id].listsongs.find(function (as) {
                return as.namesong == nas;
            }));
            console.log(playlists[id].listsongs[selecs])
            playlists[0].listsongs.splice(selecs, 1);
        }
        else {
            $(this).removeClass("fa-regular fa-heart");
            $(this).addClass("fa-solid fa-heart");
            let selecs = playlists[id].listsongs.indexOf(playlists[id].listsongs.find(function (as) {
                return as.namesong == nas;
            }));
            playlists[0].listsongs.push(playlists[id].listsongs[selecs])
        }
    });
}

function songadd(name, port, artis, album, fechadd, duracion, like) {
    let song = document.createElement('tr')
    let heart;
    if (like) {
        heart = '<i class="fa-solid fa-heart btnlike">'
    } else {
        heart = '<i class="fa-regular fa-heart btnlike"></i>'
    }
    song.innerHTML = `
    <td><img src="${port}" alt="" id="ImgSong__"></td>
    <td>${name}</td>
    <td>${artis}</td>
    <td>${album}</td>
    <td>${duracion}</td>
    <td>${heart}</td>
    `
    return song
}

function CreateMyPlaylists(id, name, port) {
    let plist = document.createElement('div')
    plist.id = id
    plist.className = 'PList'
    plist.innerHTML = `
    <img src="${port}" alt="">
    <div>
    ${name} <br>
    <p style="color: gray;">decripcion</p>
    </div>
    `
    return plist
}



$("#PlayListsMix").click(function (e) {
    $("#SongsLikes tbody").empty();
    for (const song of listSong1) {
        $('#SongsLikes tbody').append(song);
    }
});
$("#PlayListsLikes").click(function (e) {
    $("#SongsLikes tbody").empty();
    for (const song of LikeSong) {
        $('#SongsLikes tbody').append(song);
    }
});


$(':button').click(function (e) {
    console.log('se dio clqui')
});

// $("input.btnLike").click(function (e) {
//     console.log("Se dio like")
//     // let song = $(this).parent().parent();
//     // let addsong = "<tr>" + $("." + song).html() + "</tr>"
//     // console.log(song)
//     // LikeSong.push(addsong);
//     // console.log(LikeSong);
// });

var song1 = '<tr><td><img id="ImgSong__" src="Imagenes_Proyecto/Portdas/portada1.jpeg" alt=""></td><td id="NameSong__">Mi nombre de la cancion</td><td>Nombre Artista</td><td>Album1</td><td>27 sep 2023</td><td><input class="btnLike" type="button" value="❤" /></td><tr>'
var song2 = '<tr><td><img id="ImgSong__" src="Imagenes_Proyecto/Portdas/portada2.jpeg" alt=""></td><td id="NameSong__">Mi nombre de la cancion</td><td>Nombre Artista</td><td>Album1</td><td>27 sep 2023</td><td><input class="btnLike" type="button" value="❤" /></td><tr>'
var song3 = '<tr><td><img id="ImgSong__" src="Imagenes_Proyecto/Portdas/portada3.jpeg" alt=""></td><td id="NameSong__">Mi nombre de la cancion</td><td>Nombre Artista</td><td>Album1</td><td>27 sep 2023</td><td><input class="btnLike" type="button" value="❤" /></td><tr>'
var song4 = '<tr><td><img id="ImgSong__" src="Imagenes_Proyecto/Portdas/portada4.jpeg" alt=""></td><td id="NameSong__">Mi nombre de la cancion</td><td>Nombre Artista</td><td>Album1</td><td>27 sep 2023</td><td><input class="btnLike" type="button" value="❤" /></td><tr>'

var LikeSong = [song1, song2, song3, song4]
var listSong1 = [song2, song1, song4, song3, song2, song3, song1, song4]

$(document).ready(function () {
    for (const song of LikeSong) {
        $('#SongsLikes tbody').append(song);
    }
});

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

let playact;
$("#SongsLikes").click(function (e) {
    if (playact != undefined) {
        $(playact).parent().removeClass('Play');
    }
    playact = e.target
    $(e.target).parent().addClass('Play');
    let img = $('.Play #ImgSong__').attr("src");
    $("#Rp img").attr('src', img);
    $('#RepNameSong').text("Mi nombre de la cancion");
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
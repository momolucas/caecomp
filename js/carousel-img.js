/*
Made by Lucas Silva
License: none (public domain)
*/
var width = screen.width;
//var height = screen.height;
var img0 = document.getElementById('convidado0');
var img1 = document.getElementById('convidado1');
var img2 = document.getElementById('convidado2');
var img3 = document.getElementById('convidado3');
var img4 = document.getElementById('convidado4');
var img5 = document.getElementById('convidado5');
var img6 = document.getElementById('convidado6');
var img7 = document.getElementById('convidado7');
var img8 = document.getElementById('convidado8');

if (width <= 768){
        var img0 = $("#convidado0").attr('src', 'img/convidados/banner_mb.png');
        var img1 = $("#convidado1").attr('src', 'img/convidados/mauricio_santos_mb.png');
        var img2 = $("#convidado2").attr('src', 'img/convidados/maria_alice_mb.png');
        var img3 = $("#convidado3").attr('src', 'img/convidados/daniel_veiga_mb.png');
        var img4 = $("#convidado4").attr('src', 'img/convidados/tsen_mb.png');
        var img5 = $("#convidado5").attr('src', 'img/convidados/luiz_frederico_mb.png');
        var img6 = $("#convidado6").attr('src', 'img/convidados/stephen_mb.png');
        var img7 = $("#convidado7").attr('src', 'img/convidados/fabio_mb.png');
        var img8 = $("#convidado8").attr('src', 'img/convidados/luiz_mottim_mb.png');
}

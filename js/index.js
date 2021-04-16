/*▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼*/
/* -------- Seta Subir- ------- */
/*▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼*/

$(function () {
    $(window).scroll(() => updateAltura()); // Requisito: Scroll
    $("#subir-float").toggle(); // Requisito: Toggle
    updateAltura();
});

/* Funções para aparecer o atalho de subir */

function updateAltura() {
    if ($(window).scrollTop() > 220) {
        $("#subir-float").fadeIn(600); // Requisito: Fade
    } else {
        $("#subir-float").fadeOut(600);
    }
}
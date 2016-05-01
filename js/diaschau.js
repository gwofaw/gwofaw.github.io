function makeDiaschau() {
    var bild_nr = 1;
    return function() {
        if (bild_nr < 20) {
            bild_nr++;
        } else {
            bild_nr = 1;
        }
        var titelbild = document.getElementById("titelbild");
        titelbild.src = "/img/det/det" + bild_nr + ".jpg"
    };
}

var naechstes_bild = makeDiaschau();
dia_intervall = window.setInterval(naechstes_bild, 3000)

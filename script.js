let video = document.getElementById("unVideo");
let botonPausaPlay = document.getElementById("pausaPlay");
let botonMuteDesmute = document.getElementById("muteDesmute");


function pausaPlay() {
    if (unVideo.paused) {
        unVideo.play();
        botonPausaPlay.innerHTML = "Pausa";
    } else {
        unVideo.pause();
        botonPausaPlay.innerHTML = "Play";
    }
}

function convertirPequenyo() {
    unVideo.width = 480;
    unVideo.height = 215;
}

function convertirNormal() {
    unVideo.width = 560;
    unVideo.height = 315;
}

function convertirGrande() {
    unVideo.width = 660;
    unVideo.height = 415;
}

function silenciarDesilenciar() {
    if (unVideo.muted) {
        unVideo.muted = false;
        botonMuteDesmute.innerHTML = "Silenciar";
    } else {
        unVideo.muted = true;
        botonMuteDesmute.innerHTML = "Desilenciar";
    }
}


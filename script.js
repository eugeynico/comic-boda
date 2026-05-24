const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
        width: 550,
        height: 800,
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0,
        showCover: true,
        mobileScrollSupport: false,
        flippingTime: 800,
        drawShadow: false,
        usePortrait: true,
        startZIndex: 0,
        autoSize: true,
    }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

/* =========================
   FONDO ANIMADO
========================= */

function crearFondo() {

    const fondo = document.getElementById("fondo");

    const iconos = ["💖", "🎵"];

    setInterval(() => {

        const item = document.createElement("div");

        item.classList.add("float");

        item.innerHTML =
            iconos[Math.floor(Math.random() * iconos.length)];

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        item.style.fontSize =
            (18 + Math.random() * 20) + "px";

        fondo.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 9000);

    }, 600);
}

/* =========================
   BOTÓN INICIO
========================= */

document
.getElementById("botonInicio")
.addEventListener("click", function () {

    document
    .getElementById("inicio")
    .style.display = "none";

    document
    .getElementById("musicBtn")
    .style.display = "block";

    document
    .getElementById("book")
    .style.display = "block";

    const musica =
        document.getElementById("musica");

    musica.play();

    crearFondo();
});

/* =========================
   BOTÓN MÚSICA
========================= */

document
.getElementById("musicBtn")
.addEventListener("click", function () {

    const musica =
        document.getElementById("musica");

    if (musica.paused) {

        musica.play();

        this.innerHTML =
            "🔊 Música ON";

    } else {

        musica.pause();

        this.innerHTML =
            "🔇 Música OFF";
    }
});
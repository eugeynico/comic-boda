function crearFondo() {
    const fondo = document.getElementById("fondo");
    const iconos = ["💖", "🎵"];

    setInterval(() => {
        const item = document.createElement("div");
        item.classList.add("float");
        item.innerHTML = iconos[Math.floor(Math.random() * iconos.length)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = (4 + Math.random() * 5) + "s";
        item.style.fontSize = (20 + Math.random() * 25) + "px";

        fondo.appendChild(item);

        setTimeout(() => item.remove(), 9000);

    }, 500);
}

function lanzarConfeti() {

    for (let i = 0; i < 60; i++) {

        const c = document.createElement("div");
        c.innerHTML = ["🎉","✨","💖"][Math.floor(Math.random()*3)];
        c.style.position = "fixed";
        c.style.left = "50%";
        c.style.top = "50%";
        c.style.fontSize = (18 + Math.random()*20) + "px";
        c.style.zIndex = "9999";
        c.style.pointerEvents = "none";

        document.body.appendChild(c);

        let x = (Math.random() - 0.5) * 800;
        let y = (Math.random() - 0.5) * 800;

        c.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1800,
            easing: "ease-out"
        });

        setTimeout(() => c.remove(), 1800);
    }
}

function mostrarMensajeFinal() {

    const mensaje = document.createElement("div");

    mensaje.innerHTML = "💍 Y esta historia recién comienza... 💍";

    mensaje.style.position = "fixed";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";
    mensaje.style.background = "rgba(255,255,255,0.88)";
    mensaje.style.padding = "25px 40px";
    mensaje.style.borderRadius = "18px";
    mensaje.style.fontSize = "30px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "#444";
    mensaje.style.zIndex = "10000";
    mensaje.style.boxShadow = "0 0 25px rgba(0,0,0,0.18)";
    mensaje.style.opacity = "0";

    document.body.appendChild(mensaje);

    mensaje.animate([
        { opacity: 0, transform: "translate(-50%, -40%) scale(0.8)" },
        { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
    ], {
        duration: 1200,
        fill: "forwards"
    });

    setTimeout(() => {
        mensaje.remove();
    }, 5000);
}

document.getElementById("botonInicio").addEventListener("click", function () {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("book").style.display = "block";
    document.getElementById("musicBtn").style.display = "block";

    const musica = document.getElementById("musica");
    musica.play();

    crearFondo();

    const pageFlip = new St.PageFlip(
        document.getElementById("book"),
        {
            width: 600,
            height: 850,
            size: "stretch",
            minWidth: 315,
            maxWidth: 1000,
            minHeight: 420,
            maxHeight: 1350,
            showCover: true,
            mobileScrollSupport: true,
            flippingTime: 1500,
            usePortrait: true,
            maxShadowOpacity: 0.18
        }
    );

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    setTimeout(() => {
        document.querySelector(".page img").animate(
            [
                { transform: "scale(1)", filter: "brightness(1)" },
                { transform: "scale(1.03)", filter: "brightness(1.15)" },
                { transform: "scale(1)", filter: "brightness(1)" }
            ],
            {
                duration: 2200,
                iterations: 1
            }
        );
    }, 800);

    pageFlip.on("flip", (e) => {
        if (e.data === 11) {
            lanzarConfeti();
            mostrarMensajeFinal();
        }
    });

});

document.getElementById("musicBtn").addEventListener("click", function () {

    const musica = document.getElementById("musica");

    if (musica.paused) {
        musica.play();
        this.innerHTML = "🔊 Música";
    } else {
        musica.pause();
        this.innerHTML = "🔇 Silencio";
    }

});
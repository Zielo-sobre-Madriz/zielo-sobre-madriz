// BOTÓN SUBIR
const btn = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// CARGA INFINITA DE BLOQUES (LIMITE 10)
const container = document.getElementById("contenido");
let contador = 1;
const limite = 10;

function cargarBloques() {
    for (let i = 0; i < 5; i++) {

        if (contador > limite) return; // 👉 PARA CUANDO LLEGA A 10

        const bloque = document.createElement("div");
        bloque.className = "bloque";
        bloque.innerHTML = `
            <h3>Bloque ${contador}</h3>
            <p>Contenido dinámico cargado automáticamente.</p>
        `;
        container.appendChild(bloque);
        contador++;
    }
}

cargarBloques();

// SCROLL INFINITO CONTROLADO
window.addEventListener("scroll", () => {
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50 &&
        contador <= limite
    ) {
        cargarBloques();
    }
});




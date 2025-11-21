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


// CARGA INFINITA DE BLOQUES
const container = document.getElementById("contenido");


function cargarBloques() {
    

        const bloque = document.createElement("div");
        bloque.className = "bloque";
        bloque.innerHTML = `
        
        `;
        container.appendChild(bloque);
        contador++;
    }
// cargar los primeros bloques
cargarBloques();
cargarBloques();
cargarBloques();

// scroll infinito controlado
window.addEventListener("scroll", () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (bottom) {
        cargarBloques();
    }
});

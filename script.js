// CARGA AUTOMÁTICA DEL CONTENIDO COMPLETO
window.addEventListener('DOMContentLoaded', async () => {
    const main = document.getElementById('content');
    
    try {
        const response = await fetch('contenido/todo.html');
        const html = await response.text();
        
        // Insertar después de la primera sección hero
        main.insertAdjacentHTML('beforeend', html);
        
        // Re-inicializar el botón subir si es necesario
        inicializarBotonSubir();
        
    } catch (error) {
        console.error('Error al cargar el contenido:', error);
    }
});

// Función para el botón subir (moverla aquí si no está ya)
function inicializarBotonSubir() {
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
}

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

// Manejo del formulario
const form = document.getElementById('formulario');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
                // Aquí añadir lógica de envío (AJAX, fetch, etc.)
                alert('¡Gracias por contactarnos! Te responderemos lo antes posible.');
                form.reset();
            });
        }

// CARGA INFINITA DE BLOQUES (LÍMITE 15)
const container = document.getElementById("contenido");
let contador = 0;
const limite = 15;

function cargarBloques() {
    if (contador >= limite) return;


        const bloque = document.createElement("div");
        bloque.className = "bloque";
        bloque.innerHTML = `
            <h3>Bloque ${contador}</h3>
            
        `;
        container.appendChild(bloque);
        contador++;
    }


// scroll infinito controlado
window.addEventListener("scroll", () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (bottom && contador < LIMITE) {
        cargarBloques();
    }
});

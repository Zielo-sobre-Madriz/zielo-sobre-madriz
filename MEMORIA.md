# Memoria del Proyecto: Zielo sobre MadriZ

## 1. Introducción y Propósito

**Zielo sobre MadriZ** es una iniciativa de energía comunitaria enfocada en la emancipación energética ciudadana. El proyecto busca establecer un modelo cooperativo que permita a los barrios de Madrid gestionar su propia energía de forma justa, autónoma y solidaria.

La plataforma web sirve como punto de encuentro digital para difundir esta misión, explicar el modelo de cooperativa y conectar con diferentes actores sociales (vecinos, empresas, tercer sector).

## 2. Objetivos del Proyecto

*   **Difusión:** Comunicar claramente la misión y visión de la cooperativa.
*   **Educación:** Informar sobre la problemática energética actual y las soluciones propuestas (comunidades energéticas).
*   **Captación:** Atraer a socios y colaboradores a través de formularios de contacto y llamadas a la acción claras.
*   **Transparencia:** Explicar el modelo de negocio y filantrópico detrás de la iniciativa.

## 3. Arquitectura Técnica

El proyecto está construido utilizando tecnologías web estándar, priorizando el rendimiento, la accesibilidad y un diseño moderno.

### 3.1 Tecnologías Utilizadas
*   **HTML5:** Estructura semántica del contenido.
*   **CSS3:** Estilos personalizados sin dependencia de frameworks pesados. Uso extensivo de **Variables CSS (Custom Properties)** para la gestión de temas y colores.
*   **JavaScript (Vanilla):** Lógica de cliente ligera para mejorar la experiencia de usuario (scroll, carga dinámica).

### 3.2 Estructura de Archivos
La organización del proyecto es modular:

*   **Raíz (`/`):**
    *   `index.html`: Página principal que actúa como "shell" o contenedor de la aplicación.
    *   `style.css`: Hoja de estilos global que define la identidad visual.
    *   `script.js`: Lógica principal para interactividad y carga de contenido.
*   **Contenido (`/contenido`):**
    *   Contiene fragmentos HTML (`quienesSomos.html`, `queEstamosHaciendo.html`, etc.) que permiten una gestión modular de la información.
    *   `todo.html`: Archivo que parece aglutinar varias secciones para una carga dinámica en la página principal.
*   **Imágenes (`/img`):** Recursos gráficos (logos, fotografías de paneles solares).

### 3.3 Funcionalidades Clave
1.  **Carga Dinámica de Contenido:** El script principal (`script.js`) implementa un patrón de carga diferida (`fetch`) para insertar contenido adicional (como `contenido/todo.html`) en el DOM tras la carga inicial, mejorando el tiempo de primera pintura (FCP).
2.  **Navegación Suave:** Implementación de botón "Subir" (Back to Top) con comportamiento de scroll suave (`smooth scroll`).
3.  **Diseño Responsivo:** Uso de Media Queries para adaptar la interfaz a dispositivos móviles (ajuste de menús, grids de 2 columnas a 1 columna).
4.  **Sistema de Diseño:**
    *   **Tipografía:** Inter Variable para textos y fuentes serif (Georgia, Times) para cabeceras con estilo clásico/institucional.
    *   **Paleta de Colores:** Identidad "Dark Tech Azul" (`#06182a` fondo, `#3b4550` primario) que transmite seriedad y modernidad tecnológica.

## 4. Diseño y Experiencia de Usuario (UX/UI)

El diseño visual busca un equilibrio entre **activismo social** y **solidez tecnológica**.

*   **Estética:** "Dark Mode" por defecto. Fondos oscuros con acentos en azul brillante (`#09f`) y blanco para textos, garantizando alto contraste y legibilidad.
*   **Componentes:**
    *   **Tarjetas (Cards):** Utilizadas para presentar información modular (ej. "Indignación", "Qué estamos haciendo") con efectos de `hover` y elevación.
    *   **Botones:** Estilo "btn-main-blue" con sombras y efectos de transformación al interactuar.
    *   **Imágenes:** Uso de máscaras con gradientes (`mask-image`) para integrar fotografías suavemente con el fondo oscuro.

## 5. Estado Actual

El proyecto cuenta con una estructura base sólida:
*   La página de inicio (`Home`) está funcional.
*   Las secciones informativas están redactadas y maquetadas.
*   La lógica de navegación y estilos base están implementados.

---
*Documento generado el 16 de febrero de 2026*

document.addEventListener("DOMContentLoaded", () =>{
    //Selescciono lista del DOM*/
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLiks = document.querySelectorAll(".nav-link");
    const heroImage = document.getElementById("heroImage");

    //control del menu
    if(menuToggle && navMenu){
        menuToggle.addEventListener("click", () => {
            //alternar la clase de etiqueta nav
            navMenu.classList.toggle("is-open");

            //accesibilidad
            const isOpen = navMenu.classList.contains("is-open");
            menuToggle.setAttribute("aria-expanded", isOpen)
        });
    }

    //Para manejo interactivo
    navLiks.forEach((link) => {
        link.addEventListener("click", (e) => {
            //evitar la recarda predeterminada //
            //e.preventDefault();

            //Remuevo la clase active
            navLiks.forEach((item) => item.classList.remove("active"));

            //Agregar la clase active
            link.classList.add("active");

            //Para mobil
            if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains("is-open")) {
                navMenu.classList.remove("is-open");
            }
            // impresion
            console.log(`Sección activa seleccionada: ${link.textContent.trim()}`);
        });
    });

    //Reajuste de redimensionar
    window.addEventListener("resize", () => {
        // Si el usuario pasa de pantalla móvil a laptop/PC, cierra el menú desplegable
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains("is-open")) {
            navMenu.classList.remove("is-open");
        }
    });

    //Interraccion con la imagen
    if (heroImage){
        heroImage.addEventListener("click", () => {
            alert("Has hecho click en la pagina central.")
        });
    }
});
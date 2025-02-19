// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    
    // 🔹 Animación de desplazamiento suave con GSAP
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, { 
                    duration: 1, 
                    scrollTo: target, 
                    ease: "power2.out",
                    onComplete: () => {
                        gsap.fromTo(target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
                    }
                });
            }
        });
    });

    // 🔹 Animación de aparición de secciones con GSAP
    document.querySelectorAll("section").forEach(section => {
        gsap.fromTo(section, { opacity: 0, y: 50 }, { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            scrollTrigger: {
                trigger: section,
                start: "top 80%", 
                toggleActions: "play none none reverse" 
            }
        });
    });

    // 🔹 Desplazamiento al inicio cuando se hace clic en "btnInicio"
    const btnInicio = document.getElementById("btnInicio");
    if (btnInicio) {
        btnInicio.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("inicio").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // 🔹 Formulario de contacto con SweetAlert2
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita el envío del formulario

            // Verifica si SweetAlert2 está disponible
            if (typeof Swal !== "undefined") {
                Swal.fire({
                    title: "¡Genial!",
                    text: "Gracias por confiar en mí. Me pondré en contacto lo más pronto posible.",
                    icon: "success",
                    confirmButtonText: "Entendido",
                    timer: 5000, // Desaparece en 5 segundos
                    timerProgressBar: true
                });
            } else {
                alert("¡Genial! Gracias por confiar en mí. Me pondré en contacto lo más pronto posible.");
            }

            // Limpiar el formulario
            this.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Activa/desactiva la clase
    });

    // Cierra el menú cuando se hace clic en un enlace
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Oculta el menú después de seleccionar
        });
    });
});


window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// Mostrar Calendly cuando termina de cargar
window.addEventListener("message", function (e) {
    if (e.data.event && e.data.event === "calendly.event_type_viewed") {
        document.getElementById("calendly-loader").style.display = "none";
    }
});

// Fallback: ocultar loader después de 5 segundos igual
setTimeout(function () {
    const loader = document.getElementById("calendly-loader");
    if (loader) loader.style.display = "none";
}, 5000);
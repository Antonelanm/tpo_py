//INICIO SUBMENU
const elementosMenu = document.querySelectorAll(".menu-desktop__link");
const elementosMenuBurger = document.querySelectorAll(".menu-burger__link");
const opciones = document.querySelectorAll(".options");

console.log(elementosMenuBurger);

function mostrarOpciones(id) {
  opciones.forEach((opcion) => {
    if (opcion.id === id) {
      opcion.style.display = "flex";
    } else {
      opcion.style.display = "none";
    }
  });
}

function ocultarOpciones() {
  opciones.forEach((opcion) => {
    opcion.style.display = "none";
  });
}

elementosMenu.forEach((elemento) => {
  elemento.addEventListener("mouseover", (event) => {
    const targetId = event.currentTarget.getAttribute("data-target");
    mostrarOpciones(targetId);
  });
});

elementosMenuBurger.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    const targetId = event.currentTarget.getAttribute("data-target");
    mostrarOpciones(targetId);
    console.log(targetId);
  });
});

opciones.forEach((opcion) => {
  opcion.addEventListener("mouseleave", () => {
    ocultarOpciones();
  });
});
// FIN SUBMENU

// INICIO MENU BURGER
const smallScreen = document.getElementById("smallScreen");
const largeScreen = document.getElementById("largeScreen");
const menuToggle = document.getElementById("menuToggle");
const navBurger = document.getElementById("navBurger");
const searchBarTwo = document.getElementById("search-bar-2");

menuToggle.addEventListener("click", () => {
  navBurger.style.display =
    navBurger.style.display === "flex" ? "none" : "flex";
});

// Lo mismo que mas arriba pero mas desarrollado
// menuToggle.addEventListener("click", () => {
//     // Toggle para mostrar u ocultar el menú hamburguesa cuando se hace clic en él
//     if (navBurguer.style.display === "flex") {
//         navBurguer.style.display = "none";
//     } else {
//         navBurguer.style.display = "flex";
//     }
// });

// FIN MENU BURGER

// INICIO CAMBIO NAV

function toggleMenu() {
  if (window.innerWidth <= 926) {
    // Si la pantalla es pequeña, muestra el menú hamburguesa y oculta el menú normal
    largeScreen.style.display = "none";
    smallScreen.style.display = "flex";
  } else {
    // Si la pantalla es grande, muestra el menú normal y oculta el menú hamburguesa
    largeScreen.style.display = "flex";
    smallScreen.style.display = "none";
    navBurger.style.display = "none";
    searchBarTwo.style.display = "none";
  }
}

// Ejecuta la función al cargar la página y cuando cambia el tamaño de la ventana
toggleMenu();
window.addEventListener("resize", toggleMenu);

// FIN CAMBIO NAV

// INICIO DESPLAZAMIENTO LINKS

const scrollLinks = document.querySelectorAll(".link-scroll"); // href de los a del nav

// const optionsMenu = document.getElementById(".options");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1); // Obtengo la ID del objetivo sin el símbolo "#"
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 120; // Ajusto esto según la altura de tu barra de navegación.
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      navBurger.style.display = "none";
      ocultarOpciones();
    }
  });
});

// FIN DESPLAZAMIENTO LINKS

// INICIO BARRA DE BUSQUEDA Opcion 1

// document.getElementById("search-input").addEventListener("keypress", function(event) {
//   if (event.key === "Enter") {
//     searchProducts();
//   }
// });

// function searchProducts() {
//   // Obtén el texto ingresado en la barra de búsqueda
//   let searchTerm = document.getElementById("search-input").value.toLowerCase();

//   // Obtén todos los elementos de productos
//   let productContainers = document.querySelectorAll(".catalogo");

//   productContainers.forEach(function (container) {
//     let productCards = container.querySelectorAll(".cards-product .card");
//     let sectionTitle = container.querySelector(".section-title");

//     let atLeastOneVisible = false;

//     productCards.forEach(function (card) {
//       let productTitle = card.querySelector(".product-title").textContent.toLowerCase();
//       let productDescription = card.querySelector(".product-description").textContent.toLowerCase();

//       if (productTitle.includes(searchTerm) || productDescription.includes(searchTerm)) {
//         card.style.display = "flex"; // Muestra el producto
//         atLeastOneVisible = true;
//       } else {
//         card.style.display = "none"; // Oculta el producto
//       }
//     });

//     // Oculta o muestra el título y el contenedor según los resultados de búsqueda
//     if (atLeastOneVisible) {
//       sectionTitle.style.display = "block";
//       container.style.display = "block";
//     } else {
//       sectionTitle.style.display = "none";
//       container.style.display = "none";
//     }
//   });
// }

// FIN BARRA DE BUSQUEDA opcion 2

// INICIO BARRA DE BUSQUEDA Opcion 2

// Agregar eventos para ambas barras de búsqueda
document
  .getElementById("search-input-1")
  .addEventListener("input", function () {
    searchProducts(1); // Llama a la función de búsqueda para la primera barra
  });

document
  .getElementById("search-input-2")
  .addEventListener("input", function () {
    searchProducts(2); // Llama a la función de búsqueda para la segunda barra
  });

function searchProducts(searchInputId) {
  // Obtiene el texto ingresado en la barra de búsqueda
  let inputId = `search-input-${searchInputId}`;
  let searchTerm = document.getElementById(inputId).value.toLowerCase();

  // Obtén todos los elementos de productos
  let productContainers = document.querySelectorAll(".catalogo");

  productContainers.forEach(function (container) {
    let productCards = container.querySelectorAll(".cards-product .card");
    let sectionTitle = container.querySelector(".section-title");

    let atLeastOneVisible = false;

    productCards.forEach(function (card) {
      let productTitle = card
        .querySelector(".product-title")
        .textContent.toLowerCase();
      let productDescription = card
        .querySelector(".product-description")
        .textContent.toLowerCase();

      if (
        productTitle.includes(searchTerm) ||
        productDescription.includes(searchTerm)
      ) {
        card.style.display = "flex"; // Muestra el producto
        atLeastOneVisible = true;
      } else {
        card.style.display = "none"; // Oculta el producto
      }
    });

    // Oculta o muestra el título y el contenedor según los resultados de búsqueda
    if (atLeastOneVisible) {
      sectionTitle.style.display = "block";
      container.style.display = "block";
    } else {
      sectionTitle.style.display = "none";
      container.style.display = "none";
    }
  });
}

// FIN BARRA DE BUSQUEDA opcion 2

// INICIO BARRA DE BUSQUEDA PANTALLAS PEQUENAS

// Elementos del DOM
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("search-bar-2");
const searchClose = document.getElementById("searchClose");
const searchTerm = document.getElementById("searchTerm");

// Evento de clic en el ícono de búsqueda
searchIcon.addEventListener("click", function () {
  // Oculta .small-screen
  smallScreen.style.display = "none";
  // Muestra el campo de búsqueda y oculta otros elementos
  searchInput.style.display = "flex";

  // Evento de clic en el botón de cerrar
  searchClose.addEventListener("click", function () {
    // Oculta el campo de búsqueda y muestra .small-screen
    searchInput.style.display = "none";
    smallScreen.style.display = "flex";
    searchTerm.value = ""; // Limpia el campo de búsqueda
  });

  // Enfoca automáticamente en el campo de búsqueda
  searchTerm.focus();
});

// FIN BARRA DE BUSQUEDA PANTALLAS PEQUENAS

// INICIO DE SELECCION DE PRODUCTO PARA COMPRA

// Obtén una lista de todos los elementos con la clase 'card'
const cards = document.querySelectorAll(".card");

// Itera a través de todas las tarjetas y agrega un evento de clic a cada una
cards.forEach((card) => {
  card.addEventListener("click", function () {
    // Obtener los datos del producto específico
    const productData = {
      title: this.querySelector(".product-title").textContent,
      description: this.querySelector(".product-description").textContent,
      price: this.querySelector(".product-price").textContent,
      image: this.querySelector("img").src,
    };

    // Codificar los datos del producto en una cadena y redirigir a detalles.html
    const productDataString = encodeURIComponent(JSON.stringify(productData));
    window.location.href = `/details?data=${productDataString}`;
  });
});

// FIN DE SELECCION DE PRODUCTO PARA COMPRA

// INICIO API
traerDatosAPI();
traerDatosAPI();
traerDatosAPI();

function traerDatosAPI() {
  fetch("https://randomuser.me/api")
    .then((datos) => datos.json())
    .then((datos) => {
      contenidoApi.innerHTML += `
                    <div class="tarjeta-api">                              
                        <img src="${datos.results[0].picture.large}"</img><br><br>
                        
                        ${datos.results[0].name.last}, ${datos.results[0].name.first}
                    </div>`;
    });
}
// FIN API

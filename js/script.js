let abrir_articulo = document.querySelectorAll(".img_thumbnail");
let articuloContainer = document.querySelector(".tenis_container");
let articulo = document.querySelector(".efecto_tenis");
let cerrar_articulo = document.querySelector(".cerrar");
let body = document.querySelector("body");
estado = "close";

for (let i = 0; i < abrir_articulo.length; i++) {
  abrir_articulo[i].addEventListener("click", function () {
    if (estado == "close") {
      articuloContainer.classList.add("efecto_articulo");
      articuloContainer.classList.add("efecto_body");
      estado = "open";
    }
  });
}

cerrar_articulo.addEventListener("click", function () {
  articuloContainer.classList.remove("efecto_articulo");

  estado = "close";
});

// const BotonVolver = document.querySelector(".flecha1");
// const BotonSeguir = document.querySelector(".flecha2");
// const slideImages = document.querySelectorAll(".img_efecto_tenis .img");
// const thumbnailImages = document.querySelectorAll(
//   ".efecto_tenis_images .ef_img"
// );

// let currentSlide = 0;

// function showSlide(index) {
//   for (i = 0; i < slideImages.length; i++) {
//     if (i === index) {
//       slideImages[i].style.display = "block";
//     } else {
//       slideImages[i].style.display = "none";
//     }
//   }
// }

// function showThumbnail(index) {
//   for (let i = 0; i < thumbnailImages.length; i++) {
//     if (i === index) {
//       thumbnailImages[i].style.opacity = "0.6";
//     } else {
//       thumbnailImages[i].style.opacity = "1";
//     }
//   }
// }

// BotonSeguir.addEventListener("click", nextSlide);
// BotonVolver.addEventListener("click", prevSlide);

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slideImages.length;
//   showSlide(currentSlide);
//   showThumbnail(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
//   showSlide(currentSlide);
//   showThumbnail(currentSlide);
// }

// // Mostrar la primera imagen
// showSlide(currentSlide);
// showThumbnail(currentSlide);

let contador = 0;
let contadorTotal = 0;
let botonSumar = document.querySelector(".mas");
let botonRestar = document.querySelector(".menos");
let agregarCarrito = document.querySelector(".carrito_agregar");
let mensajeCarritoVacio = document.querySelector(".mensaje");
let infoCompra = document.querySelector(".info_compra");
let precioProducto = document.querySelector(".precio_producto");
let cantidadProducto = document.querySelector(".cantidad_producto");
let totalProducto = document.querySelector(".total_producto");

botonSumar.addEventListener("click", sumarContador);
botonRestar.addEventListener("click", restarContador);
agregarCarrito.addEventListener("click", agregarAlCarrito);

function sumarContador() {
  contador++;
  actualizarContador();
}

function restarContador() {
  if (contador > 0) {
    contador--;
    actualizarContador();
  }
}

function actualizarContador() {
  const contadorElement = document.querySelector(".carrito_num_actual");
  contadorElement.textContent = contador;
}

function agregarAlCarrito() {
  contadorTotal += contador;
  contador = 0;
  ActualizarCantidadTotal();
  actualizarContador();
  actualizarMensajeCarritoVacio();
  actualizarInfoProducto();
}

function ActualizarCantidadTotal() {
  const totalContador = document.querySelector(".contador");
  totalContador.textContent = contadorTotal;
}

let abrirCompraUsuario = document.querySelector(".usuario");
let compraUsuario = document.querySelector(".compra");

abrirCompraUsuario.addEventListener("click", function () {
  compraUsuario.classList.toggle("efecto_verificar_compra");
});

function actualizarMensajeCarritoVacio() {
  if (contadorTotal === 0) {
    mensajeCarritoVacio.style.display = "flex";
    infoCompra.style.display = "none";
  } else {
    mensajeCarritoVacio.style.display = "none";
    infoCompra.style.display = "flex";
  }
}

function actualizarInfoProducto() {
  const precioUnidad = 125.0;
  const totalPrecio = precioUnidad * contadorTotal;
  precioProducto.textContent = "$" + precioUnidad.toFixed(2);
  cantidadProducto.textContent = "x" + contadorTotal;
  totalProducto.textContent = "$" + totalPrecio.toFixed(2);
}

//codigo para eliminar producto
infoCompra.addEventListener("click", function (event) {
  if (event.target.classList.contains("eliminar_producto")) {
    const producto = event.target.closest(".producto");
    const cantidadProducto = parseInt(
      producto.querySelector(".cantidad_producto").textContent.slice(1)
    );
    contadorTotal -= cantidadProducto;
    ActualizarCantidadTotal();

    if (contadorTotal == 0) {
      actualizarMensajeCarritoVacio();
    }
  }
});

let botonMenu = document.querySelector(".barra_nav_movil");
let contenedorLinks = document.querySelector(".hero_nav");
let abrirMenu = document.querySelector(".abrir_menu");
let cerrarMenu = document.querySelector(".cerrar_menu");
let estadoMenu = false;

botonMenu.addEventListener("click", function () {
  body.classList.toggle("efecto_body_art");
  contenedorLinks.classList.toggle("efecto_nav_movil");

  if (estadoMenu == false) {
    abrirMenu.style.display = "none";
    cerrarMenu.style.display = "block";
    estadoMenu = true;
  } else {
    abrirMenu.style.display = "block";
    cerrarMenu.style.display = "none";
    estadoMenu = false;
  }
});

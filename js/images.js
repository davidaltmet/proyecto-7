$(document).ready(function () {
  $("#img_efecto_tenis").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $(".flecha1"), // Selector para la flecha izquierda
    nextArrow: $(".flecha2"), // Selector para la flecha derecha
  });
});

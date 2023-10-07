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

  $("#efecto_tenis_images").slick({
    slidesToShow: 4, // Muestra 4 miniaturas a la vez
    slidesToScroll: 1,
    asNavFor: "#img_efecto_tenis", // ID del slider principal de imágenes
    dots: false,
    focusOnSelect: true,
  });
  $("#img_efecto_tenis").on(
    "afterChange",
    function (event, slick, currentSlide) {
      // Remover la clase "active" de todas las miniaturas
      $(".ef_img").removeClass("active");
      // Agregar la clase "active" a la miniatura correspondiente
      $(".ef_img").eq(currentSlide).addClass("active");
    }
  );
});

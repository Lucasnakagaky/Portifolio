
/* Estilização com CSS */

window.sr = ScrollReveal({
  reset: true,
});

/* Sobre */
sr.reveal(".info", { origin: "top", distance: "80px", duration: 3000 });
sr.reveal(".btn", { origin: "top", distance: "80px", duration: 3000 });
sr.reveal("#linkedin", { origin: "top", distance: "80px", duration: 3000 });
sr.reveal("#github", { origin: "top", distance: "80px", duration: 5000 });

/* Minhas habilidades */
sr.reveal(".html_nome", {  origin: "top", distance: "80px", duration: 3000 });
sr.reveal(".css_nome", {  origin: "top", distance: "80px", duration: 4000 });
sr.reveal(".js_nome", {  origin: "top", distance: "80px", duration: 5000 });
sr.reveal(".bootstrap_nome", { origin: "top", distance: "80px",  duration: 6000 });
sr.reveal(".react_nome", {  origin: "top", distance: "80px", duration: 7000 });

/* portifolio */
sr.reveal(".box", {  origin: "top", distance: "80px", duration: 4000 });

/* Ao clicar no menu o cabeçalho vai "desaparecer" */
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });
  /* Ao mover o scroll o cabeçalho vai "desaparecer" */
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  /* Rolagem suave*/
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});



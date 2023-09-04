/* Estilização com CSS */

window.sr = ScrollReveal({
  reset: true,
});

/* Sobre */
sr.reveal(".left", { origin: "left", distance: "100px", duration: 3000 });
sr.reveal(".right", { origin: "right", distance: "100px", duration: 3000 });
sr.reveal("#curriculo", { origin: "top", distance: "80px", duration: 4000 });

/* Minhas habilidades */
sr.reveal(".box-container", {
  origin: "top",
  distance: "80px",
  duration: 4000,
});

/* portifolio */
sr.reveal(".box", { origin: "top", distance: "80px", duration: 4000 });
sr.reveal(".gitHub", { origin: "top", distance: "80px", duration: 3500 });

let menuMobile = document.querySelector(".navbar-mobile");
menuMobile.style.display = "none";
/* funcionalidade do cabeçalho */
function menuShow() {
  let menuMobile = document.querySelector(".navbar-mobile");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").class = "fa-solid fa-bars";
    menuMobile.style.display = "none";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").class = "fa-solid fa-x";
    menuMobile.style.display = "block";
  }
}

/* Rolagem suave */
$('a[href*="#"]').click("click", function (e) {
  e.preventDefault();
  menuMobile.style.display = "none";
  var id = $(this).attr("href");
  targetOffset = $(id).offset().top;
  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    500,
    "linear"
  );
});

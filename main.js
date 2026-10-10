(function () {
  // Menú en celular
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  burger.addEventListener("click", function () {
    var abierto = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", abierto);
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // Año del pie de página
  var ahora = new Date();
  document.getElementById("y").textContent = ahora.getFullYear();

  // Horario: [apertura, cierre] en formato 24 h. null = cerrado.
  // Si cambias la tabla de horarios en index.html, cambia también esto.
  var horario = { 0: [12, 18], 1: null, 2: [12, 22], 3: [12, 22], 4: [12, 22], 5: [12, 23], 6: [12, 23] };
  var dia = ahora.getDay();
  var hora = ahora.getHours() + ahora.getMinutes() / 60;
  var fila = document.querySelector('tr[data-d="' + dia + '"]');
  if (fila) fila.classList.add("today");

  var rango = horario[dia];
  var abierto = rango && hora >= rango[0] && hora < rango[1];
  var estado = document.getElementById("estado");
  estado.classList.toggle("open", !!abierto);
  estado.querySelector("span").textContent = abierto ? "Abierto ahora" : "Cerrado ahora";

  // Formulario de reserva: arma el mensaje y abre WhatsApp
  var form = document.getElementById("form-reserva");
  var campoFecha = document.getElementById("r-fecha");
  var hoy = new Date(ahora.getTime() - ahora.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  campoFecha.min = hoy; // no permite fechas pasadas

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("r-nombre").value.trim();
    var personas = document.getElementById("r-personas").value;
    var fecha = campoFecha.value.split("-").reverse().join("/"); // dd/mm/aaaa
    var horaReserva = document.getElementById("r-hora").value;
    var nota = document.getElementById("r-nota").value.trim();

    var texto = "Hola, quiero reservar una mesa.\n" +
      "Nombre: " + nombre + "\n" +
      "Personas: " + personas + "\n" +
      "Fecha: " + fecha + "\n" +
      "Hora: " + horaReserva;
    if (nota) texto += "\nComentarios: " + nota;

    var numero = (typeof WHATSAPP !== "undefined") ? WHATSAPP : "50300000000";
    window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
  });
})();
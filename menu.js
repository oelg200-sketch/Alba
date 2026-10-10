(function () {
  var contenedor = document.getElementById("platos");
  var pestanas = document.getElementById("tabs");
  var modal = document.getElementById("modal");
  if (!contenedor || !pestanas || !modal || typeof PLATOS === "undefined") return;

  // Prueba primero la foto local (assets/platos/...), luego la de internet.
  // Si ninguna carga, se quita y se ve el fondo de color.
  function crearImg(local, respaldo, alt) {
    var img = document.createElement("img");
    var intento = 0;
    img.alt = alt;
    img.loading = "lazy";
    img.addEventListener("error", function () {
      intento++;
      if (intento === 1 && respaldo) img.src = respaldo;
      else img.remove();
    });
    img.src = local;
    return img;
  }

  // Tarjetas de platos
  function pintar(categoria) {
    contenedor.innerHTML = "";
    PLATOS.forEach(function (p) {
      if (categoria !== "Todo" && p.categoria !== categoria) return;

      var b = document.createElement("button");
      b.type = "button";
      b.className = "dish";
      b.setAttribute("aria-haspopup", "dialog");

      var pic = document.createElement("div");
      pic.className = "pic";
      pic.style.setProperty("--c", p.color);
      pic.appendChild(crearImg("assets/platos/" + p.archivo, p.img, p.nombre));
      b.appendChild(pic);

      var txt = document.createElement("div");
      txt.className = "txt";
      var top = document.createElement("div");
      top.className = "top";
      var h = document.createElement("h3");
      h.textContent = p.nombre;
      var pr = document.createElement("span");
      pr.className = "price";
      pr.textContent = p.precio;
      top.appendChild(h);
      top.appendChild(pr);
      var d = document.createElement("p");
      d.textContent = p.corto;
      txt.appendChild(top);
      txt.appendChild(d);
      b.appendChild(txt);

      b.addEventListener("click", function () { abrir(p); });
      contenedor.appendChild(b);
    });
  }

  // Pestañas de categorías
  var botones = [];
  ["Todo"].concat(CATEGORIAS).forEach(function (c, i) {
    var t = document.createElement("button");
    t.type = "button";
    t.className = "tab";
    t.textContent = c;
    t.setAttribute("aria-pressed", i === 0 ? "true" : "false");
    t.addEventListener("click", function () {
      botones.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      t.setAttribute("aria-pressed", "true");
      pintar(c);
    });
    botones.push(t);
    pestanas.appendChild(t);
  });
  pintar("Todo");

  // Ventana de detalle
  var mImg = modal.querySelector(".m-img");
  var mTitulo = modal.querySelector("#m-titulo");
  var mPrecio = modal.querySelector(".m-precio");
  var mTexto = modal.querySelector(".m-texto");
  var mLista = modal.querySelector(".m-lista");
  var mWa = modal.querySelector(".m-wa");

  function fila(titulo, valor) {
    var dt = document.createElement("dt");
    dt.textContent = titulo;
    var dd = document.createElement("dd");
    dd.textContent = valor;
    mLista.appendChild(dt);
    mLista.appendChild(dd);
  }

  function abrir(p) {
    mImg.style.setProperty("--c", p.color);
    mImg.innerHTML = "";
    mImg.appendChild(crearImg("assets/platos/" + p.archivo, p.img, p.nombre));
    mTitulo.textContent = p.nombre;
    mPrecio.textContent = p.precio;
    mTexto.textContent = p.detalle;
    mLista.innerHTML = "";
    fila("Categoría", p.categoria);
    fila("Ingredientes", p.ingredientes);
    fila("Maridaje", p.maridaje);
    mWa.href = "https://wa.me/" + WHATSAPP + "?text=" +
      encodeURIComponent("Hola, quiero reservar una mesa y probar el plato: " + p.nombre);
    modal.showModal();
  }

  modal.querySelector(".m-cerrar").addEventListener("click", function () { modal.close(); });
  // Clic fuera de la ventana la cierra
  modal.addEventListener("click", function (ev) {
    if (ev.target === modal) modal.close();
  });
})();
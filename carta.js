/*
  CARTA DEL RESTAURANTE
  Aquí editas todo: platos, precios, descripciones y fotos.

  FOTO de cada plato:
    1. Primero busca tu foto en assets/platos/ con el nombre del campo "archivo" (ejemplo: assets/platos/ceviche.jpg).
    2. Si ese archivo no existe, usa la foto de internet del campo "img" (de ejemplo).
    3. Si tampoco carga, la tarjeta muestra un fondo de color.
  Así que solo guarda tus fotos en assets/platos/ con el nombre exacto y aparecen solas.

  Para agregar un plato, copia uno de los bloques { ... } y cambia sus datos.
*/

var WHATSAPP = "50300000000"; // Cambia por el número del restaurante

function foto(palabras, n) {
  // Fotos de ejemplo por palabra clave. Cámbialas por las exactas de cada plato.
  return "https://loremflickr.com/800/600/" + palabras + "?lock=" + n;
}

var CATEGORIAS = ["Entradas", "Platos fuertes", "Postres", "Bebidas"];

var PLATOS = [
  {
    nombre: "Carpaccio de res",
    archivo: "carpaccio.jpg",
    categoria: "Entradas",
    precio: "$12",
    corto: "Láminas finas de res con parmesano y rúcula.",
    detalle: "Res cortada en láminas muy finas, aderezada con aceite de oliva, limón y alcaparras, y terminada con virutas de parmesano y rúcula fresca.",
    ingredientes: "Res, parmesano, rúcula, alcaparras, limón, aceite de oliva",
    maridaje: "Copa de vino blanco seco",
    color: "#5c2a2a",
    img:"assets/Copilot_20261009_205640.png"
  },
  {
    nombre: "Ceviche de la casa",
    archivo: "ceviche.jpg",
    categoria: "Entradas",
    precio: "$11",
    corto: "Pescado del día curtido en limón con cebolla morada.",
    detalle: "Pescado fresco del día, curtido al momento en limón con cebolla morada, cilantro y un toque de ají. Se sirve con plátano frito.",
    ingredientes: "Pescado del día, limón, cebolla morada, cilantro, ají, plátano",
    maridaje: "Limonada de la casa o vino blanco",
    color: "#2f4a4f",
    img: "assets/Copilot_20261009_205648.png"
  },
  {
    nombre: "Crema de hongos",
    archivo: "crema-hongos.jpg",
    categoria: "Entradas",
    precio: "$9",
    corto: "Crema suave de hongos con aceite de trufa.",
    detalle: "Crema de hongos salteados con cebolla y tomillo, terminada con unas gotas de aceite de trufa y crocante de pan.",
    ingredientes: "Hongos, crema, cebolla, tomillo, aceite de trufa, pan",
    maridaje: "Copa de vino tinto ligero",
    color: "#4a3a2a",
    img: "assets/Copilot_20261009_205650.png"
  },
  {
    nombre: "Filete de res al vino tinto",
    archivo: "filete.jpg",
    categoria: "Platos fuertes",
    precio: "$28",
    corto: "Filete tierno con reducción de vino y puré de papa.",
    detalle: "Filete de res a la plancha en el punto que prefieras, bañado con una reducción de vino tinto y acompañado de puré de papa y vegetales salteados.",
    ingredientes: "Filete de res, vino tinto, papa, mantequilla, vegetales de temporada",
    maridaje: "Vino tinto de cuerpo medio",
    color: "#5a2323",
    img: "assets/Copilot_20261009_210314.png"
  },
  {
    nombre: "Salmón a la mantequilla de limón",
    archivo: "salmon.jpg",
    categoria: "Platos fuertes",
    precio: "$24",
    corto: "Salmón dorado con mantequilla cítrica y espárragos.",
    detalle: "Lomo de salmón sellado a la plancha con salsa de mantequilla y limón, acompañado de espárragos y papas baby.",
    ingredientes: "Salmón, mantequilla, limón, espárragos, papas baby, eneldo",
    maridaje: "Vino blanco con cuerpo",
    color: "#7a4a3a",
    img: "assets/Copilot_20261009_210315.png"
  },
  {
    nombre: "Risotto de hongos",
    archivo: "risotto.jpg",
    categoria: "Platos fuertes",
    precio: "$19",
    corto: "Arroz cremoso con hongos y parmesano.",
    detalle: "Arroz arborio cocinado lentamente con caldo y vino blanco, mezclado con hongos salteados y terminado con parmesano. Opción vegetariana.",
    ingredientes: "Arroz arborio, hongos, parmesano, vino blanco, caldo, mantequilla",
    maridaje: "Vino blanco seco",
    color: "#5a4a30",
    img:"assets/Copilot_20261009_210310.png"
  },
  {
    nombre: "Pollo relleno de espinaca",
    archivo: "pollo-relleno.jpg",
    categoria: "Platos fuertes",
    precio: "$18",
    corto: "Pechuga rellena con espinaca y queso en salsa de hierbas.",
    detalle: "Pechuga de pollo rellena de espinaca y queso crema, dorada al horno y servida con salsa de hierbas finas y arroz con almendras.",
    ingredientes: "Pollo, espinaca, queso crema, hierbas finas, arroz, almendras",
    maridaje: "Copa de vino rosado",
    color: "#6a4a2a",
    img: "assets/Copilot_20261009_210312.png"
  },
  {
    nombre: "Volcán de chocolate",
    archivo: "volcan-chocolate.jpg",
    categoria: "Postres",
    precio: "$9",
    corto: "Bizcocho tibio con centro fundido y helado de vainilla.",
    detalle: "Bizcocho de chocolate semiamargo con el centro líquido, servido tibio con una bola de helado de vainilla y frutos rojos.",
    ingredientes: "Chocolate semiamargo, mantequilla, huevo, helado de vainilla, frutos rojos",
    maridaje: "Café espresso o vino dulce",
    color: "#3a2220",
    img: "assets/Copilot_20261009_210313.png"
  },
  {
    nombre: "Crème brûlée",
    archivo: "creme-brulee.jpg",
    categoria: "Postres",
    precio: "$8",
    corto: "Crema de vainilla con costra de caramelo.",
    detalle: "Crema suave de vainilla horneada a baja temperatura y cubierta con una capa de azúcar caramelizada al momento.",
    ingredientes: "Crema, yema de huevo, vainilla, azúcar",
    maridaje: "Café o licor de naranja",
    color: "#7a6030",
    img: "assets/Copilot_20261009_210316.png"
  },
  {
    nombre: "Cheesecake de frutos rojos",
    archivo: "cheesecake.jpg",
    categoria: "Postres",
    precio: "$8",
    corto: "Tarta cremosa con salsa de frutos rojos.",
    detalle: "Tarta de queso cremosa sobre base de galleta, con salsa casera de fresa y frutos rojos.",
    ingredientes: "Queso crema, galleta, fresas, frutos rojos, vainilla",
    maridaje: "Té o espumante",
    color: "#6a2a3a",
    img: "assets/Copilot_20261009_211436.png"
  },
  {
    nombre: "Copa de vino de la casa",
    archivo: "vino.jpg",
    categoria: "Bebidas",
    precio: "$7",
    corto: "Tinto, blanco o rosado, servido por copa.",
    detalle: "Selección de vino de la casa por copa. Pregunta por las etiquetas disponibles y te recomendamos según tu plato.",
    ingredientes: "Tinto, blanco o rosado según disponibilidad",
    maridaje: "Va con cualquier plato de la carta",
    color: "#4a1a2a",
    img: "assets/images (4).jpg"
  },
  {
    nombre: "Limonada de la casa",
    archivo: "limonada.jpg",
    categoria: "Bebidas",
    precio: "$4",
    corto: "Limonada fresca con hierbabuena.",
    detalle: "Limonada preparada al momento con hierbabuena y hielo. Puede ser natural o con un toque de jengibre.",
    ingredientes: "Limón, hierbabuena, azúcar, hielo, jengibre (opcional)",
    maridaje: "Ideal con las entradas frías",
    color: "#4a6a3a",
    img: "assets/images (5).jpg"
  }
];
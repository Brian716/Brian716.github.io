document.addEventListener("mousedown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var xi = 150;
var yi = 150;

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  switch (evento.srcElement.nodeName)
  {
    case "CANVAS":
    console.log(xi);
    dibujarLinea("blue", xi, yi, evento.x, evento.y, papel);
    xi = evento.x;
    yi = evento.y;
    break;
  }
}

//Cuando el ratón pase por encima de la foto, que se cambie su puntero en modo «crosshair».
$("script:first").before('<div id="container"></div>');

$("div").append("<img src='assets/img/hqdefault.jpg'>").append("<img src= 'assets/img/Morty.jpg'>").append("<img src= 'assets/img/rick-feat-1-480x279.jpg' >");

$("img").css("margin-left", "30px").css(    {height: "300px",
      width: "300px"});

//!Opcion 1
//*$("#container").children("img").css("cursor", 'crosshair');
//!Opcion 2
$("img").ready(addEventListener("mouseover", $("img").css("cursor","crosshair")));

//Por cada 10 píxeles que se mueva el ratón en horizontal sobre la imágen, variar un 0.1 su opacidad. Si es a la derecha ir aumentándola (hasta el máximo de 1). y si es a la izquierda ir disminuyéndola (hasta el mínimo de 0).
$("div").children().attr("class","img");
// $("div").children().attr("onmousemove", "aplicarOpacidad(event);");

$(".img").on("mousemove", function (e) {
  let restante = e.pageX- $(".img").parent().offset().left  ;
	console.log(restante/$(".img").width());
});

// var img = document.getElementById("img");
// function aplicarOpacidad(event){
//   var x = event.pageX - img.offsetLeft;
//   img.style.opacity = x/img.offsetWidth;
// };

// $(document).ready(function(){
//   $('.img').mousemove(function(e){
//     let x = event.pageX - img.offsetLeft;
//     let z = x/img.offsetWidth;
//     console.log(e.pageX + " " + e.pageY);
//     $("div").children(".img").css("opacity", z);
//   });
// });

// window.onload = function () {
//   this.document.onmouseover = function (e) {
//     $("#img1");
//     console.log("Left: " + e.pageX-img.offsetLeft + " " + "Top: " + e.pageY);
//   }
// }

// ?$("#container").children(".img").css("opacity", "0.5");

//Y por otro lado, ir aumentando y disminuyendo la altura de la imágen, cuando mover de forma vertical el ratón sobre ella. Cada píxel que se mueva hacia arriba ir aumentando en 1 pixel su altura, y cuando se mueva hacia abajo ir disminuyéndola.




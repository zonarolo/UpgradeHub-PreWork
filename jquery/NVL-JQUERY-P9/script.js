//Añade (mediante jQuery, evidentemente) una clase a los div que engloba las décadas musicales, que sea igual a su identificador. El resultado final debería ser el siguiente:

for (let i = 0; i <= $("div#container").children("div").length; i++) {
  $("div#container").children("div").eq(i).attr("class",$("div#container").children("div").eq(i).attr("id"));
}
//Obtén el tipo de música y la década a la que pertenece (a través de los identificadores de los div) del grupo con identificador «heroes».
let grupo = $("#heroes").text();
let decada = $("#heroes").parent().parent().attr("id");
let genero = $("#heroes").parent().attr("class");
console.log("El grupo " + grupo + " de la decada de los " + decada + " es de genero " + genero);

//A los grupos siguientes a #heroes dentro de su categoría, añádeles un identificador que sea igual al nombre del grupo.

for (let i = 0; i < $("#heroes").nextAll().length; i++) {
  $("#heroes").nextAll().eq(i).attr("id", S("#heroes").nextAll().eq(i).text());
}

//Busca si existe un grupo internacional cuyo id sea queen, y si no existe, añádelo dentro de #ochenta #internacional.

if ($("#ochenta .internacional").find("#queen") == true) {
  console.log("Ya esxiste");
} else {
  $("#ochenta .internacional").append("<p id=queen>Queen</p>");
}
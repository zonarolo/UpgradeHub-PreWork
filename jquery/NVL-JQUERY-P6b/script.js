//Crea dinámicamente (con jQuery) otra lista, con los 5 primeros elementos de esta lista.
$("ul:first").after("<ul id=mi-lista></ul>");

for (let i = 0; i < 5; i++) {
	$("ul li")
		.eq(i)
		.clone(i)
		.appendTo($("#mi-lista"));
}

//Ahora borra esos elementos de la lista original.

for (let i = 0; i < 5; i++) {
	$("ul li")[i].remove();
}

//Imagina que te has equivocado, y en realidad no querías borrar el quinto elemento. Propón una solución para volver a insertarlo en la lista original.

let agregando = $("ul li").eq("0");
agregando.before(" <li id=cantabria class=even><span>Cantabria</span></li>");

//Crea un nuevo elemento, en la segunda lista, que sea el siguiente elemento:

$("#mi-lista").append("<li id=perejil class=odd><span>Isla de Perejil</span></li>");

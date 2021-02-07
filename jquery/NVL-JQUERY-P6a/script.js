//Modifica el tipo de <li> para los que tienen la clase even, y pon que su icono sea un cuadrado.
$("ul li.even").attr("style", "list-style: square");

//Al séptimo elemento, sea el que sea, ponle una altura de 10 píxeles.

$("li")
	.eq(6)
	.height(10);

//Pon el mayúsculas todas comunidades autónomas con la clase odd.

$("ul li.odd").attr("style", "text-transform: uppercase");

//Mueve Murcia debajo de Madrid.
$("#murcia").insertAfter($("#madrid"));

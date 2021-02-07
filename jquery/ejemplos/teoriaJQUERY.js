// $(document).ready(function() {
// 	alert("Hola Mundo");
// });

//ejemplo 2

$(document).ready(function () {
	$("a").click(function (event) {
		alert("Hola Mundo");
		// event.preventDefault();
	});
});
//ejemplo3
$("div").attr("title", $("a").attr("title"));

//ejemplo4 
$("div span#mySpan a").attr("href", "www.instagram.com");

//ejemplo5
$("#myDiv p:first").html("Este es <strong>el nuevo</strong> párrafo");

//ejemplo6
// Diferentes opciones para mover elementos.
// Mover el primer <li> al final
var li = $("#myList li:first").appendTo("#myList");
// Mismo comportamiento que el caso anterior
$("#myList").append($("#myList li:first"));
// En esta segunda solución, no hay forma de acceder
// al <li> que se ha modificado

// Hacer una copia del elemento
// Copiar el primer <li> al final de la lista:
$("#myList li:first")
	.clone()
	.appendTo("#myList");
// Crea nuevos elementos partiendo de una cadena de texto
// con el código HTML
$("<p>Esto es un párrafo nuevo</p>");
$('<li class="new">Nuevo elemento de una lista</li>');
// Crea un nuevo elemento a partir de un objeto
$("<a/>", {
	html: "Esto es un <strong>enlace</strong> nuevo",
	class: "new",
	href: "foo.html",
});

// Se crea y añade un elemento en la página a la vez
$("ul").append("<li>list item</li>");

//La sintaxis para crear elementos se sencilla, pero hay que tener en cuenta que este proceso es costoso si se hace repetidamente. La mejor forma de añadir muchos elementos en un mismo contenedor a la vez es concatenar su HTML en una única cadena de texto, y después meter ese texto en el contenedor, en vez de ir añadiendo uno a uno cada elemento. Lo ideal es usar un array para juntar todos los elementos y después unirlos en una cadena de texto.
var myItems = [];
var myList = $("#myList");
for (var i = 0; i < 100; i++) {
	myItems.push("<li>item " + i + "</li>");
}
myList.append(myItems.join(""));

// Modificar un único atributo
$("#myDiv a:first").attr("href", "newDestination.html");
// Modificar varios atributos
$("#myDiv a:first").attr({
	href: "newDestination.html",
	rel: "nofollow",
});
// Usar una función para determinar el valor del nuevo atributo
$("#myDiv a:first").attr({
	rel: "nofollow",
	href: function (idx, href) {
		return "/new/" + href;
	},
});
$("#myDiv a:first").attr("href", function (idx, href) {
	return "/new/" + href;
});

// El método .html() pone para todos los elementos h1 texto "Hola Mundo":
$("h1").html("Hola Mundo");
// Devuelve el valor del primer <h1>:
$("h1").html();
// salida > "Hola Mundo"

// Esto daría error, ya que devuelve una cadena de texto
$("h1")
	.html()
	.addClass("test");

//Relacionado con lo anterior, existe en término en inglés de “chaining”, que se puede traducir como encadenamiento, y que se refiere a ir encadenando llamadas de un método tras otro, al resultado de las siguientes operaciones.

$("#content")
	.find("h3")
	.eq(2)
	.html("Este es el nuevo texto del tercer h3");

//jQuery también proporciona el método .end() para volver a la selección original, por si se quiere seguir trabajando con otros elementos del selector.
$("#content")
	.find("h3")
	.eq(2)
	.html("Este es el nuevo texto del tercer h3")
	.end() // Devuelve la selección a todos los h3 de #content.eq(0)
	.html("Y este es el texto del primer h3");

//Compatibilidad: no todos los métodos funcionan en todos los navegadores, ni en todas sus versiones. Por ejemplo, el siguiente código intenta modificar el HTML de un <tr> dentro de un elemento con el identificador “target”
var target = document.getElementById("target");
target.innerHTML = "<td>Hola <b>Mundo</b></td>";
//Esto funciona en la mayoría de los navegadores, pero falla en algunas versiones de Internet Explorer. El código equivalente usando jQuery sería el siguiente:

var target = document.getElementById("target");
$(target).html("<td>Hola <b>Mundo</b></td>");
//Comodidad: hay muchas operaciones típicas de manipulación de elementos del DOM que con complicadas de conseguir con métodos estándares. Por ejemplo, en el siguiente ejemplo se añade un elemento almacenado en una variable llamada newElement después del elemento target.
var target = document.getElementById("target");
var newElement = document.createElement("div");
//target.parentNode.insertBefore( newElement, target.nextSibling );
//Haciendo la inserción con jQuery el código queda mucho más simple:

var target = document.getElementById("target");
var newElement = document.createElement("div");
$(target).after(newElement);

//Cuando se llama a una función de jQuery con un selector de CSS, devolverá un objeto de jQuery con los elementos seleccionados. Por ejemplo:

var headings = $("h1");
alert(headings.length);
//En este punto headings es un elemento de jQuery que tiene todos los <h1> de la página. Al mostrar el tamaño del objeto, podemos ver cuántos <h1> existen.

//Si sólo se quisiera obtener el primer <h1>, entonces habría que hacer un paso extra:

var firstHeading = headings.eq(0);
//Ahora firstHeading tiene el primer elemento, por lo que se podría empezar a operar con él, como por ejemplo cambiarle el texto, o moverlo dentro del DOM

//Una vez que se ha hecho la selección inicial con jQuery, es posible moverse por el árbol de HTML, principalmente por: padres, hijos y hermanos.

//Puedes consultar más sobre cómo recorrer los nodos en http://api.jquery.com/category/traversing/
//Para ver los ejemplos, supongamos que partimos del siguiente HTML:

		// <div class = "grandparent" >
		// 	<	div class = "parent" ></div>
		// 	<	div class = "child" ></div>
		// 	<	span class = "subchild" > </span> 
		// </div> 
		// <div> 
		// 	<div class = "surrogateParent1" >	</div> 
		// 	<div class = "surrogateParent2" ></div>
		// </div >

//Padres: los métodos principales son .parent(), .parents(), .parentsUntil() y .closest().
// Devuelve [ div.child ]
$("span.subchild").parent();
// Devuelve todos los padres de un elemento que coincidan con el selector dado:
// Devuelve [ div.parent ]
$("span.subchild").parents("div.parent");
// Devuelve [ div.child, div.parent, div.grandparent ]
$("span.subchild").parents();
// Selecciona todos los padres anteriores de un elemento, hasta llegar al selector:
// Devuelve [ div.child, div.parent ]
$("span.subchild").parentsUntil("div.grandparent");
// Devuelve el padre más cercano, sólo devolverá un elemento,
// y tendrá en cuenta al propio elemento inicial en la búsqueda
// Devuelve [ div.child ]
$("span.subchild").closest("div");
// Devuelve [ div.child ] ya que el selector también se incluye en la búsqueda:
$("div.child").closest("div");

//Hijos: los métodos para buscar los hijos son .children() y .find(). La diferencia entre ambos es sobre cuánto recorren la estructura para encontrar la selección hecha. .children() sólo opera en los hijos directos, mientras que .find() va recorriendo recursivamente todos los hijos.
// Selecciona los hijos directos de un elemento:
// Devuelve [ div.parent, div.surrogateParent1, div.surrogateParent2 ]
$("div.grandparent").children("div");
// Busca todos los elementos que cumplan la condición del selector:
// Devuelve [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
$("div.grandparent").find("div");

//Hermanos: existen varios métodos para la búsqueda de hermanos. .prev() busca los hermanos previos, .next() los siguientes, y .siblings() la unión de ambos. Además existen otros métodos como .nextAll(), .nextUntil(), .prevAll() y .prevUntil()
// Selecciona el siguiente hermano del selector:
// Devuelve [ div.surrogateParent1 ]
$("div.parent").next();
// Selecciona el hermano previo del selector
// Devuelve [] as No sibling exists before div.parent
$("div.parent").prev();
// Selecciona todos los siguientes hermanos del selector:
// Devuelve [ div.surrogateParent1, div.surrogateParent2 ]
$("div.parent").nextAll();
// Devuelve [ div.surrogateParent1 ]
$("div.parent")
	.nextAll()
	.first();
// Devuelve [ div.surrogateParent2 ]
$("div.parent")
	.nextAll()
	.last();
// Selecciona todos los hermanos previos al selector:
// Devuelve [ div.surrogateParent1, div.parent ]
$("div.surrogateParent2").prevAll();
// Devuelve [ div.surrogateParent1 ]
$("div.surrogateParent2")
	.prevAll()
	.first();
// Devuelve [ div.parent ]
$("div.surrogateParent2")
	.prevAll()
	.last();
// Selecctiona todos los hermanos en ambas direcciones, que coincidan con el selector:
// Devuelve [ div.surrogateParent1, div.surrogateParent2 ]
$("div.parent").siblings();
// Devuelve [ div.parent, div.surrogateParent2 ]
$("div.surrogateParent1").siblings();

//jQuery tiene varias formas de obtener y modificar las propiedades CSS de un elemento.

// Obtener las propiedades CSS
// Devuelve una cadena de texto. Algo como, por ejemplo, "19px"
$("h1").css("fontSize");
// Esto también funciona
$("h1").css("font-size");
// Modificar las propiedades CSS
// Modifica una propiedad de forma individual
$("h1").css("fontSize", "100px");
// Modifica varias propiedades
$("h1").css({
	fontSize: "100px",
	color: "red"
});
//Observad en los ejemplos cómo se puede usar indistintamente la forma camelCase o la forma con guión a la hora de obtener una propiedad CSS, sin embargo, para modificarla, sí que es recomendable usarla en camelCase, por lo que es una buena práctica acostumbrarse a esta nomenclatura.

//Aunque el método .css() se puede usar para modificar el CSS, tal como hemos visto en el ejemplo, no es recomendable usarlo en producción, ya que no es una buena práctica que esa lógica recaiga en la parte de JavaScript. Si se necesita modificar estilos, lo recomendable es jugar con las clases, es decir, añadir o quitar clases de CSS a los elementos, y que sea el CSS el que tenga la lógica de cómo se tiene que pintar dicho elemento.

var h1 = $("h1");
// Añade la clase “big” a la etiqueta <h1>
h1.addClass("big");
// Borra la clase “big” a la etiqueta <h1>
h1.removeClass("big");
// Elimina las clases de <h1> las sustituye por “big”
h1.toggleClass("big");
// Comprueba si la etiqueta <h1> tiene la clase “big”
if (h1.hasClass("big")) {
	//Do something
}
//Con respecto a las dimensiones, jQuery también ofrece una gran variedad de métodos para manipular las dimensiones y la posición de un elemento.

// Métodos básicos sobre las dimensiones
// Modifica el ancho de todos los elementos <h1>
$("h1").width("50px");
// Devuelve el ancho del primer elemento <h1>
$("h1").width();
// Modifica la altura de todos los elementos <h1>
$("h1").height("50px");
// Devuelve la altura del primer elemento <h1>
$("h1").height();
// Devuelve un objeto que contiene información sobre la posición
// del primer <h1> relativo a su posición en relación con su padre.
$("h1").position();

//jQuery ofrece una serie de métodos genéricos muy útiles para la implementación de nuestra lógica de negocio. Algunos de los métodos más importantes son:

$.trim() //Elimina los espacios al inicio y final de una cadena de texto.
// Devuelve "muchos espacios en blanco"
$.trim("    muchos espacios en blanco    ");
$.each() //Itera sobre objetos y arrays. Para recorrer un selector de jQuery, se debe de usar el método .each(), en vez de $.each()
$.each(["foo", "bar", "baz"], function (idx, val) {
	console.log("element " + idx + " is " + val);
});
$.each({
	foo: "bar",
	baz: "bim"
}, function (k, v) {
	console.log(k + " : " + v);
});
$.inArray() //Si encuentra el valor a buscar, devuelve su posición en el array, si no lo encuentra, devuelve -1.
var myArray = [1, 2, 3, 5];
if ($.inArray(4, myArray) !== -1) {
	console.log("found it!");
}
$.extend() //Cambia las propiedades del primer objeto usando las propiedades de los siguientes.
var firstObject = {
	foo: "bar",
	a: "b"
};
var secondObject = {
	foo: "baz"
};
var newObject = $.extend(firstObject, secondObject);
console.log(firstObject.foo); // "baz"
console.log(newObject.foo); // "baz"
//Si no se quiere ninguno de los objetos que se pasan por parámetro, basta con pasar un objeto vacío en el primer parámetro.

var firstObject = {
	foo: "bar",
	a: "b"
};
var secondObject = {
	foo: "baz"
};
var newObject = $.extend({}, firstObject, secondObject);
console.log(firstObject.foo); // "bar"
console.log(newObject.foo); // "baz"
//Además existen varios métodos específicos para comprobar el tipo de un valor.
$.isArray([]); // true
$.isFunction(function () {}); // true
$.isNumeric(3.14); // true
//También existe el método $.type() que devuelve el tipo del valor.
$.type(true); // "boolean"
$.type(3); // "number"
$.type("test"); // "string"
$.type(function () {}); // "function"
$.type(new Boolean()); // "boolean"
$.type(new Number(3)); // "number"
$.type(new String('test')); // "string"
$.type(new Function()); // "function"
$.type([]); // "array"
$.type(null); // "null"
$.type(/test/); // "regexp"
$.type(new Date()); // "date"

//Tal como vimos antes, jQuery proporciona una utilidad para recorrer estructuras llamada $.each(), así como un método .each() para recorrer un selector. Aparte existen otros métodos llamados $.map() y .map() que pueden acortar la iteracción sobre el elemento en algunos casos.

$.each() // es una función genérica que itera sobre objetos, arrays y objetos con comportamiento de array. Los objetos básicos se recorren a través de sus propiedades mientras que los arrays se recorren a través de sus índices. Básicamente es una especie de reemplazo de los bucles for tradicionales.

// Sumar valores de un array
var sum = 0;
var arr = [1, 2, 3, 4, 5];
// Bucle for tradicional
for (var i = 0, l = arr.length; i < l; i++) {
	sum += arr[i];
}
console.log(sum); // 15
// Misma operación con $.each
$.each(arr, function (index, value) {
	sum += value;
});
console.log(sum); // 15
// Sumar valores de un objeto
var sum = 0;
var obj = {
	foo: 1,
	bar: 2
}
// Recorrer un objeto con un bucle for
for (var item in obj) {
	sum += obj[item];
}
console.log(sum); // 3
// Misma operación con $.each
$.each(obj, function (key, value) {
	sum += value;
});
console.log(sum); // 3
//.each() // se usa directamente sobre una colección de jQuery. Itera sobre cada uno de los elementos y realiza una acción sobre dicho objeto. Para realizar dicha acción se le pasa a una función el índice del elemento y su valor.
// Dado el siguiente código HTML
		// <ul >
		// <li > < a href = "#" > Enlace 1 < /a></li >
		// <li > < a href = "#" > Enlace 2 < /a></li >
		// <li > < a href = "#" > Enlace 3 < /a></li >
		// </ul>

$("li").each(function (index, element) {
	console.log($(element).text())}
);
// Muestra lo siguiente:
// Enlace 1
// Enlace 2
// Enlace 3
//En ocasiones no es necesario utilizar .each() para realizar alguna operación sobre todos los elementos de un selector, ya que el propio método que realiza la acción de forma implícita ya realiza dicha iteración. Este es el caso, por ejemplo, de .addClass(), que de forma instintiva se podría usar así:

$("li").each(function (index, el) {
	$(el).addClass("newClass");
});
//Sin embargo no es necesario hacer este recorrido a todos los <li> para añadirles una clase, se puede hacer directamente así:

$("li").addClass("newClass");
//De todos modos ambos casos funcionarían, pero el segundo caso es más eficiente y más legible. Para saber cuando usar o no .each() basta con leer la documentación de los métodos que vayamos a usar, para ver si es necesario.

.map() // un caso típico para tener que recorrer un selector, es crear un array con sus elementos, o una cadena de texto en donde se van concatenando sus valores. Para este caso lo más cómodo es usar .map()

//Supongamos que queremos hacer esto:

var newArr = [];
$("li").each(function () {
	newArr.push(this.id);
});
//Es decir, queremos crear un array con los identificadores de los <li> que previamente hemos seleccionado. Esto se puede hacer también así:

$("li").map(function (index, element) {
	return this.id;
}).get();
//El método .get() del final de la llamada lo que hace es justamente eso, que el resultado de esta llamada sea un array, ya que en realidad .map() lo que devuelve es una colección jQuery que hay que tratarla. Si se quisiera que devolviese una cadena de texto con todos los elementos concatenados, en vez de llamar a .get() habría que llamar a .join().

$.map() // este método es a .map() lo que $.each() es a .each(). Es decir, $.map() trabaja con arrays de JavaScript, mientras que .map() lo hace con objetos de jQuery, y por este motivo no hace falta poner el .get() al final de la llamada, ya que aquí sí que devolverá directamente un array con el resultado de la operación.

	//Aquí podemos ver un ejemplo donde se usan ambos métodos:
	<
	li id = "a" > < /li> <
li id = "b" > < /li> <
li id = "c" > < /li> <
script >
	var arr = [{
		id: "a",
		tagName: "li"
	}, {
		id: "b",
		tagName: "li"
	}, {
		id: "c",
		tagName: "li"
	}];
// Devuelve [ "a", "b", "c" ]
$("li").map(function (index, element) {
	return element.id;
}).get();
// También devuelve [ "a", "b", "c" ]
$.map(arr, function (value, index) {
	return value.id;
}); <
/script>

.index() //es un método de los objetos de jQuery que se usa generalmente para buscar un elemento dentro del propio objeto. Tiene cuatro formas distintas de ser utilizado:

	//Sin argumentos
<ul>
<div> </div> 
<li id = "foo1" > foo </li> 
<li id = "bar1" > bar </li> 
<li id = "baz1" > baz </li> 
<div> </div> 
</ul> 
<script>
	var foo = $("#foo1");
	console.log("Index: " + foo.index()); // 1
	var listItem = $("li");
	// Esto llama de forma implícita al método .first()
	console.log("Index: " + listItem.index()); // 1
	console.log("Index: " + listItem.first().index()); // 1
	var div = $("div");
	// También llama a .first() implícitamente
	console.log("Index: " + div.index()); // 0
	console.log("Index: " + div.first().index()); // 0
</script>
// En el primer ejemplo, .index() devuelve la posición (contando a partir de 0) de #foo1 dentro de su padre (es la segunda posición, porque hay un <div> delante, pero como la primer posición es 0, devuelve 1).

// En el caso del último ejemplo, devuelve 0 porque es la primera posición. En ambos casos, .index() siempre busca la primera aparición del elemento a buscar.

// Con una cadena de texto como parámetro
<ul>
	<div class = "test" > </div> 
	<li id = "foo1" > foo </li> 
	<li id = "bar1" class = "test" > bar </li> 
	<li id = "baz1" > baz </li> 
<div class = "test" > </div> 
</ul> 
<div id = "last"> </div> 
<script >
var foo = $("li");
// Llama de forma implícita a .first()
console.log("Index: " + foo.index("li")); // 0
console.log("Index: " + foo.first().index("li")); // 0
var baz = $("#baz1");
console.log("Index: " + baz.index("li")); // 2
var listItem = $("#bar1");
console.log("Index: " + listItem.index(".test")); // 1
var div = $("#last");
console.log("Index: " + div.index("div")); // 2
</script>
// Cuando se llama a .index() pasándole como parámetro una cadena de texto, hay que tener en cuenta dos cosas. La primera es que jQuery va a llamar de forma implícita a .first().

// La segunda es que jQuery va a buscar en todo el DOM, usando como selector el texto que recibe por parámetro, y comprobando el índice dentro de ese nuevo objeto de jQuery. Por ejemplo, cuando usamos .index(“div”) en el último ejemplo, jQuery selecciona todos los <div> del documento, a partir de ahí busca el índice que contenga el primer elemento en el objeto de jQuery que está haciendo la búsqueda de .index() (en este caso el que tenga el identificador “last”).

// Con un objeto de jQuery como parámetro
<ul>
	<div class = "test"> </div>  
	<li id = "foo1" > foo </li>  
	<li id = "bar1" class = "test" > bar </li>  
	<li id = "baz1" > baz </li>  
	<div class = "test" > </div>  
</ul> 
<div id = "last"> </div>  
<script>
var foo = $("li");
var baz = $("#baz1");
console.log("Index: " + foo.index(baz)); // 2
var tests = $(".test");
var bar = $("#bar1");
// Llama implícitamente a .first() en el parámetro
console.log("Index: " + tests.index(bar)); // 1
console.log("Index: " + tests.index(bar.first())); // 1
</script>
// En este caso se comprueba el primer elemento que se pasa por parámetro contra todos los elementos del objeto de jQuery original. El objeto original, que es el que llama a .index(), es de tipo array y se le busca por el objeto que recibe .index() como argumento, desde su posición 0 hasta el final.

// Para entenderlo mejor, en el último ejemplo primero se obtienen todos los elementos con la clase “test”, y sobre esa colección de elementos se busca el elemento que tenga el identificador “bar1”. Hay 3 elementos con la clase “test”, y de esos tres, el segundo tiene el identificador “bar1”, por eso devuelve 1 (vuelvo a recordar que la posición del primer elemento es 0).

// Con un elemento del DOM como argumento
// En este caso, el elemento que se le pasa por parámetro se busca entre todos los elementos del objeto jQuery. Es un caso muy similar (más sencillo) que el anterior, sólo que se pasa directamente el elEmento del DOM en vez de un objeto jQuery.

// Se puede consultar sobre eventos en https://developer.mozilla.org/en-US/docs/Web/Events y https://api.jquery.com/category/events/
// Con jQuery es sencillo configurar los eventos que se lanzan en una página web. Estos eventos los suele lanzar el propio usuario con su comportamiento en la navegación de la página, con acciones como teclear texto en un campo de un formulario, o mover el ratón. En algunos casos, como ver cuando la página se ha terminado de cargar, es el propio navegador el que lanza el evento.

// jQuery ofrece una serie de métodos para la mayoría de los eventos nativos de los navegadores. Estos métodos (como .click(), .focus(), .blur(), .change(), etc) están encapsulados dentro del método .on(), que es muy útil para bindear una misma función a varios eventos.

// Forma estándar de controlar el evento click
$("p").click(function () {
	console.log("Has hecho click sobre un párrafo");
});
// El equivalente usando el método on()
$("p").on("click", function () {
	console.log("Has hecho click sobre un párrafo");
});
// En ocasiones es necesario controlar varios eventos para un mismo elemento de la página. Con el método .on() es bastante sencillo gestionar esto.

// Usar una misma función para varios eventos
$("input").on(
	"click change", // Lista de los eventos asociados
	function () {
		console.log("Se ha hecho click o modificado un input");
	}
);
// Controlar varios eventos con diferentes acciones
$("p").on({
	"click": function () {
		console.log("clicked!");
	},
	"mouseover": function () {
		console.log("hovered!");
	}
});
// Al igual que existe el método .on(), también existe el método .off(), que elimina los comportamientos extra que le hemos asignado a los eventos.

// Borra todos los controladores del evento click en los <p>
$("p").off("click");
// Elimina un controlador en específico, manteniendo el resto
var foo = function () {
	console.log("foo");
};
var bar = function () {
	console.log("bar");
};
$("p").on("click", foo).on("click", bar);
$("p").off("click", bar); // Aún sigue funcionando el método foo
// Otro caso que no es extraño que suceda es que queramos controlar un evento, pero sólo su primera aparición, por ejemplo el primer click en un elemento. Para hacer esto existe el método .one().

// Se asocia la función firstClick al método .one()
$("p").one("click", firstClick);

function firstClick() {
	console.log("Has hecho click aquí por primera vez.");
	// Ahora se podría crear un nuevo controlador para los siguientes clicks
	// Este paso no sería necesario si sólo queremos controlar el primero
	$(this).click(function () {
		console.log("Ya habías hecho click antes.");
	});
}
// Este método también puede asociarse a varios eventos a la vez:

$("input[id]").one("focus mouseover keydown", firstEvent);

function firstEvent(eventObject) {
	console.log("El evento " + eventObject.type + " ha ocurrido por primera vez en el input con id " + this.id);
}
// En este caso firstEvent se ejecutará una vez por cada evento y por cada elemento. Es decir, la primera vez que se haga foco en cada uno de los <input> se ejecutará esta función.
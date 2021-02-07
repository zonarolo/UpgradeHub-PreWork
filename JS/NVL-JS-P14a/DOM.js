var pelis =
	'[{"Nombre": "El señor de los anillos","genero": "Acción"},{"Nombre": "Regreso al futuro","genero": "Acción"},{"Nombre": "los increibles 2","genero": "Animacion"},{"Nombre": "El conjuro 2","genero": "Terror"},{"Nombre": "Los juegos del hambre","genero": "Drama"},{"Nombre": "Los vengadores","genero": "Ciencia ficcion"},{"Nombre": "American Pie","genero": "Comedia"},{"Nombre": "Resacon en las vegas","genero": "Comedia"},{"Nombre":"Harry Potter","genero": "Fantastico"},{"Nombre": "Frozen","genero": "Animacion"},{"Nombre": "Anabelle","genero": "Terror"},{"Nombre": "Jurassic World","genero": "Ciencia ficcion"},{"Nombre": "Piratas del caribe","genero": "Fantastico"},{"Nombre": "Shrek","genero": "Animacion"},{"Nombre": "Bajo la misma estrella","genero": "Romantica"},{"Nombre": "Toy story 3","genero": "Animacion"},{"Nombre": "Ace Ventura","genero": "Comedia"},{"Nombre": "X-men","genero": "Acción"}]';

var listaPelis = JSON.parse(pelis);

const lista = document.createElement("ul");

for (let i = 0; i < listaPelis.length; i++) {
	const newItem = document.createElement("li");
	const span = document.createElement("span");
	const newContent = document.createTextNode(listaPelis[i].Nombre);
	span.appendChild(newContent);

	const icon = document.createElement("i");

	if (listaPelis[i].genero === "Acción") {
		icon.setAttribute("class", "fas fa-bomb");
	} else if (listaPelis[i].genero === "Animacion") {
		icon.setAttribute("class", "fab fa-reddit-alien");
	} else if (listaPelis[i].genero === "Terror") {
		icon.setAttribute("class", "fas fa-ghost");
	} else if (listaPelis[i].genero === "Ciencia ficcion") {
		icon.setAttribute("class", "fas fa-user-astronaut");
	} else if (listaPelis[i].genero === "Comedia") {
		icon.setAttribute("class", "fas fa-theater-masks");
	} else if (listaPelis[i].genero === "Fantastico") {
		icon.setAttribute("class", "fab fa-wizards-of-the-coast");
	} else if (listaPelis[i].genero === "Drama") {
		icon.setAttribute("class", "fas fa-mask");
	} else {
		icon.setAttribute("class", "fas fa-heart");
	}

	newItem.appendChild(span);
	newItem.appendChild(icon);

	lista.appendChild(newItem);
}

let contenedorLista = document.querySelector("#contenedor");
contenedorLista.appendChild(lista);

/*
Bacchetta, Tomás
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	console.log("La edad es " + edad);

	if (edad == 15){
		alert("Niña bonita.");
	}

}
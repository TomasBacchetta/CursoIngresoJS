/*
Bacchetta, Tomás
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert(`Su nombre es ${nombre} y tiene ${edad} años`);

	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
}


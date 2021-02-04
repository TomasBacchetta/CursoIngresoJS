/*
Bacchetta, Tomás
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
*/

/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan
*/

function mostrar()
{	
	let nombre;
	let edad;
	let apellido;

	nombre = document.getElementById("txtIdNombre").value;
	
	edad = document.getElementById("txtIdEdad").value;
	
	apellido = prompt("Ingrese también su apellido: ");

	//alert(`Usted se llama ${nombre} y tiene ${edad} años`);//
	alert(apellido + ", usted se llama " + nombre + " y tiene " + edad + " años");

}


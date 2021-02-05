/*
Bacchetta, Tomás
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17){
		alert("Usted es mayor de edad.");
	}
	
	if (edad < 18){
		alert("Usted es menor de edad");
	}
 
}
/*
Bacchetta, Tomás
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 12){
		if (edad < 18){
			alert("Usted es adolescente");
	
		} else {
			alert("Usted no es adolescente");
	
		}
	
	} else {
		alert("Usted no es adolescente");
	
	}

}
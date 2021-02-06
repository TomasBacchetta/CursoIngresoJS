/*
Bacchetta, Tomás
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 17 || edad < 12 ){
		alert("Usted NO es adolescente.");

	}else {
		alert ("Usted es adolescente.");
	}

}
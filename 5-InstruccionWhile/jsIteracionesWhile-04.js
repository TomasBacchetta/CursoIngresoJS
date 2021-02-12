/*
Bacchetta, Tomás
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 9){
		numeroIngresado = prompt("Numero incorrecto. Ingrese un numero de 0 a 9 inclusive");

	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
	
}
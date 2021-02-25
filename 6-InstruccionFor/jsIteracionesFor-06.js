/*
Bacchetta, Tomás
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	let numeroIngresado;
	let contadorPares;
	let y;

	contadorPares = 0;
	contadorPares = parseInt(contadorPares);

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado) == true || numeroIngresado < 1){
		numeroIngresado = prompt("Incorrecto! Ingrese un número válido");

	}

	for (y = 1; y < numeroIngresado + 1; y++){
		if (y % 2 == 0){
			console.log(y + " es un número par");
			contadorPares = contadorPares + 1;

		}

	}

	alert("Cantidad de números pares: " + contadorPares);

}
/*
Bacchetta, Tomás
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	let numeroIngresado;
	let contadorDivisores;
	let y;

	contadorDivisores = 0;
	contadorDivisores = parseInt(contadorDivisores);

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado) == true || numeroIngresado < 1){
		numeroIngresado = prompt("Incorrecto! Ingrese un número válido");

	}

	for (y = 1; y < numeroIngresado + 1; y++){
		if (numeroIngresado % y == 0){
			console.log(y + " es divisor de " + numeroIngresado);
			contadorDivisores = contadorDivisores + 1;

		}

	}

	alert("Cantidad de divisores de " + numeroIngresado + ": " + contadorDivisores);

}
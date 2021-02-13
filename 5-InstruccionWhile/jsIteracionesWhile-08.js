/*
Bacchetta, Tomás
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
txtIdSuma
txtIdProducto
*/

function mostrar()
{
	let contador;
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	
	contador=0;
	
	sumaPositivos=0;
	
	multiplicacionNegativos=1;
	
	respuesta = 'si';

	while (respuesta == 'si'){
		contador = contador + 1;
		
		numeroIngresado = prompt("Ingrese el número #" + contador + ":");

		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > -1){
			sumaPositivos = sumaPositivos + numeroIngresado;
		
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

		} 

		respuesta = prompt("¿Desea continuar con la carga? (si/no)");

	}

	document.getElementById('txtIdSuma').value = "La suma de los números positivos es: " + sumaPositivos;
	document.getElementById('txtIdProducto').value = "Los números negativos multiplicados dan: " + multiplicacionNegativos;

}
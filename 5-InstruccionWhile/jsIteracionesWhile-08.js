/*
Bacchetta, Tomás
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	let contador;
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let banderaNegativos;

	contador=0;
	
	sumaPositivos=0;
	
	multiplicacionNegativos = 0;

	banderaNegativos = 0;

	respuesta = 'si';

	while (respuesta == 'si'){
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el número #" + contador + ":");
		numeroIngresado = parseInt(numeroIngresado);
	
		while ((isNaN(numeroIngresado) == true)){
			numeroIngresado = prompt("Tiene que poner un numero! Ingrese el número #" + contador + ":");
			numeroIngresado = parseInt(numeroIngresado);
		
		}
		
		if (numeroIngresado > -1){
			sumaPositivos = sumaPositivos + numeroIngresado;
			
		} else {
			if (banderaNegativos == 0){
				multiplicacionNegativos = 1;
				banderaNegativos = 1;
				
			}

			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

		} 

		respuesta = prompt("¿Desea continuar con la carga? (si/no)");

		while (respuesta != 'si' && respuesta != 'no'){
			respuesta = prompt("Debe poner si o no! (si/no)");
		
		}

	}

	document.getElementById('txtIdSuma').value = "La suma de los números positivos es: " + sumaPositivos;
	document.getElementById('txtIdProducto').value = "Los números negativos multiplicados dan: " + multiplicacionNegativos;

}
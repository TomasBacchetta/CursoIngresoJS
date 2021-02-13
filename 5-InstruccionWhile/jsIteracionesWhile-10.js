/*
Bacchetta, Tomás
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{
	
	let contador;
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadNumerosPares;
	let promedioPositivos;
	let promedioNegativos;
	let difEntrePosNeg;
	
	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadNumerosPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	
	while(respuesta=="si") {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		while (isNaN(numeroIngresado) == true){
			numeroIngresado = prompt("Error! Debe ingresar un número!");
			numeroIngresado = parseInt(numeroIngresado);
		
		}

		switch (numeroIngresado){
			case 0:
				cantidadCeros = cantidadCeros + 1;
				break;
				
			default:
				if (numeroIngresado > 0){
					sumaPositivos = sumaPositivos + numeroIngresado;
					cantidadPositivos = cantidadPositivos + 1;

				} else {
					sumaNegativos = sumaNegativos + numeroIngresado;
					cantidadNegativos = cantidadNegativos + 1;
				
				}
				break;
		}

		if (numeroIngresado % 2 == 0){
			cantidadNumerosPares = cantidadNumerosPares + 1;

		}

		respuesta=prompt("¿Desea continuar? (si/no)");

		while (respuesta != 'si' && respuesta != 'no'){
			respuesta = prompt("Ingrese Si o No!");
		
		}
		
		console.log(numeroIngresado);

	}

	promedioPositivos = sumaPositivos/cantidadPositivos;

	promedioNegativos = sumaNegativos/cantidadNegativos;
	
	difEntrePosNeg = sumaPositivos - sumaNegativos;

	document.write(
		"La suma de negativos es :" + sumaNegativos + "<br>" +
		"La suma de positivos es :" + sumaPositivos + "<br>" + 
		"La cantidad de positivos es: " + cantidadPositivos + "<br>" +
		"La cantidad de negativos es: " + cantidadNegativos + "<br>" +
		"La cantidad de ceros es: "	+ cantidadCeros + "<br>" + 
		"La cantidad de números pares es: " + cantidadNumerosPares + "<br>" +
		"El promedio de positivos es: " + promedioPositivos + "<br>" +
		"El promedio de negativos es: " + promedioNegativos + "<br>" +
		"La diferencia entre positivos y negativos es: " + difEntrePosNeg 

	);
	
	
}
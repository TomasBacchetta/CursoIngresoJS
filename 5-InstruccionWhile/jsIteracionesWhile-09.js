/*
Bacchetta, Tomás
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
(el menor de los pares y el mayor de los negativos ...solo si hay)
*/
function mostrar()
{	
	var numeroIngresado;
	var mayorNegativos;
	var menorPares;
	var respuesta;
	var y;
	var banderaMaximo;
	var banderaMinimo;
	
	banderaMaximo = 0;
	banderaMinimo = 0;
	respuesta='si';


	
	for (y = 0; respuesta == "si"; y++){
		numeroIngresado = prompt("Ingrese un número");
		
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true){ 
			numeroIngresado = prompt("Error. Ingrese un número válido");
			numeroIngresado = parseInt(numeroIngresado);
			
		}
		
		
		if (numeroIngresado % 2 == 0){ //si es par
			if (banderaMinimo == 0){
				menorPares = numeroIngresado;
				banderaMinimo = 1;
			} else {
				if (numeroIngresado < menorPares){
					menorPares = numeroIngresado;
				}
			}
			
			if (numeroIngresado < 0){ //si siendo par es negativo
				if (banderaMaximo == 0){
					mayorNegativos = numeroIngresado;
					banderaMaximo = 1;
				} else {
					if (numeroIngresado > mayorNegativos){
						mayorNegativos = numeroIngresado;
					
					}

				}
				
			}
		
		} else {
			if (numeroIngresado < 0){ // si no es par pero es negativo
				if (y == 0){
					mayorNegativos = numeroIngresado;
					banderaMaximo = 1;
				
				} else {
					if (numeroIngresado > mayorNegativos){
						mayorNegativos = numeroIngresado;
						
					}
				}
				

			}

		}

		respuesta=prompt("desea continuar? (si/no)");

		while (respuesta != "si" && respuesta != "no" ){ 
			respuesta = prompt("Ingrese si o no");
		
		}

		console.log(numeroIngresado);
		console.log(mayorNegativos);
		console.log(menorPares);

	}
	
	document.getElementById('txtIdMaximo').value = mayorNegativos;
	document.getElementById('txtIdMinimo').value = menorPares;

}
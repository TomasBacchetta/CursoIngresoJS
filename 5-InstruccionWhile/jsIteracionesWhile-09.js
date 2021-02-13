/*
Bacchetta, Tomás
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	
	banderaDelPrimero = 1;
	respuesta='si';
	
	while(respuesta=="si") {
		numeroIngresado = prompt("Ingrese un número");
		
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado) == true){ 
			numeroIngresado = prompt("Error. Ingrese un número válido");
			numeroIngresado = parseInt(numeroIngresado);
			
		}
		
		if (banderaDelPrimero == 1){ 
		numeroMaximo = numeroIngresado;
		
		numeroMinimo = numeroIngresado;
		
		banderaDelPrimero = 0;
		
		}

		if (numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		
		} else {
			if (numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			
			}
		}

		respuesta=prompt("desea continuar? (si/no)");

		while (respuesta != "si" && respuesta != "no" ){ 
			respuesta = prompt("Ingrese si o no");
		
		}

		console.log(numeroIngresado);
		console.log(numeroMaximo);
		console.log(numeroMinimo);

	
}

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;

}
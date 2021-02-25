/*
Bacchetta, Tomás
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var repeticiones;
	var contador;
	
	repeticiones = prompt("ingrese el número de repeticiones");
	
	while(repeticiones < 1 || isNaN(repeticiones) == true){
		repeticiones = prompt("Incorrecto! ingrese el número de repeticiones");

	}
	
	for (contador = 0; contador < repeticiones; contador++){
		console.log("Hola UTN FRA");

	}


}
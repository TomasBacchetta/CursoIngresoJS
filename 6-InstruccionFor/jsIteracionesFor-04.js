/*
Bacchetta, Tomás
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{
	let respuesta;
	let contador;
	
	for (contador = 0; contador < contador + 1; contador++){
		respuesta = ("Ingrese 'BREAK' si quiere cortar");

		while (isNaN(respuesta) == false){
			respuesta = ("Incorrecto! Ingrese 'BREAK' si quiere cortar");
			
		}
		
		if (contador == 2){
			break;

		}
		
	}

}
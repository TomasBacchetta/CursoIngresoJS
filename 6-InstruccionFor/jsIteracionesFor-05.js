/*
Bacchetta
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function mostrar()
{
	let respuesta;
	let y;

	for (y = 0; y < y || respuesta !=9; y++){
		respuesta = prompt ("Ingrese un número (ingrese 9 para terminar");
		respuesta = parseInt(respuesta);

		while (isNaN(respuesta) == true){
			respuesta = prompt ("Incorrecto! Ingrese un número (ingrese 9 para terminar");
			respuesta = parseInt(respuesta);

		}

	}

}
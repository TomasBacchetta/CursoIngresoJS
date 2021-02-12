/*
Bacchetta, Tomás
Ejercicio 9
*/


function mostrar()
{
	const PRECIOBASE = 15000;
	let estacion;
	let destino;
	let porcentajeAumento = 0;
	let porcentajeDescuento = 0;
	let precioNeto;

	estacion = document.getElementById('txtIdEstacion').value;

	destino = document.getElementById('txtIdDestino').value;

	switch (estacion){
		case 'Invierno':
			switch (destino){
				case 'Mar del plata':
					porcentajeDescuento = 20;
					break;

				case 'Bariloche':
					porcentajeAumento = 20;
					break;

				default:
					porcentajeDescuento = 10;
					break;
				
			}
			break;
		
		case 'Verano':
			switch (destino){
				case 'Bariloche':
					porcentajeDescuento = 20;
					break;

				case 'Mar del plata':
					porcentajeAumento = 20;
					break;
					
				default:
					porcentajeAumento = 10;
					break;
			
			}
			break;

		default:
			switch (destino){
				case 'Bariloche':
				case 'Mar del plata':
				case 'Cataratas':
				porcentajeAumento = 10;
				break;

			}
			break;
	
	}

	precioNeto = PRECIOBASE + (porcentajeAumento * PRECIOBASE / 100) - (porcentajeDescuento * PRECIOBASE / 100);
	

	alert("Para ir a " + destino + " en " + estacion + " deberá abonar " + precioNeto + " pesos.");

}
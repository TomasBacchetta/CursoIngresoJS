/*
Bacchetta, Tomás
Ejercicio 9
*/


function mostrar()
{
	const PRECIOBASE = 15000;
	let estacion;
	let destino;
	let porcentaje;
	let precioNeto;

	porcentaje = 100;

	estacion = document.getElementById('txtIdEstacion').value;

	destino = document.getElementById('txtIdDestino').value;

	switch (estacion){
		case 'Invierno':
			switch (destino){
				case 'Mar del plata':
					porcentaje -= 20;
					break;

				case 'Bariloche':
					porcentaje += 20;
					break;

				default:
					porcentaje -= 10;
					break;
				
			}
			break;
		
		case 'Verano':
			switch (destino){
				case 'Bariloche':
					porcentaje -= 20;
					break;

				case 'Mar del plata':
					porcentaje += 20;
					break;
					
				default:
					porcentaje += 10;
					break;
			
			}
			break;

		default:
			switch (destino){
				case 'Bariloche':
				case 'Mar del plata':
				case 'Cataratas':
					porcentaje += 10;
				break;

			}
			break;
	
	}

	precioNeto = PRECIOBASE * porcentaje / 100;
	

	alert("Para ir a " + destino + " en " + estacion + " deberá abonar " + precioNeto + " pesos.");

}
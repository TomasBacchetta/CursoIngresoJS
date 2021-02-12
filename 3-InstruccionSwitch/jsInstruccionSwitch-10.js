/*
Bacchetta, Tomás
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch (estacion){
		case 'Invierno':
			switch (destino){
				case 'Bariloche':
					alert("Se viaja");
					break;
				
				default:
					alert("No se viaja");
					break;
			}
			break;
		
		case 'Verano':
			switch (destino){
				case 'Mar del plata':
				case 'Cataratas':
					alert ("Se viaja");
					break;
				
				default:
					alert ("No se viaja");
					break;
			}
			break;

		case 'Otoño':
			alert ("Se viaja");
			break;

		default:
			switch (destino){
				case 'Bariloche':
					alert ("No se viaja");
					break;

				default:
					alert("Se viaja");
					break;

			}
			break;
	
	}

}
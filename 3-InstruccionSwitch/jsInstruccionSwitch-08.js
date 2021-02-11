/*
Bacchetta, Tomás
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino){
		case 'Bariloche':
		case 'Ushuaia':
			alert("FRIO");
			break;

		default:
			alert("CALOR");
			break;
	}

}
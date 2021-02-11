/*
Bacchetta, Tomás
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	let mes;
	let dias;

	mes = document.getElementById('txtIdMes').value;

	switch (mes){
		case 'Febrero':
			dias = 28;
			break;
		
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			dias = 30;
			break;
		
		default:
			dias = 31;
			break;
	}
	
	alert("Este mes tiene " + dias + " días.");

}
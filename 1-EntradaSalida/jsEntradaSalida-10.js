/*
Bacchetta, Tomás
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Agregada la posibilidad de que el usuario determine el porcentaje de descuento
*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var importeFinal;
	
	importe = document.getElementById("txtIdImporte").value;
	
	importe = parseInt(importe);

	descuento = prompt("Ingrese el porcentaje de descuento: ");
	
	descuento = parseInt(descuento);
	
	importeFinal = importe - (importe * (descuento/100));
	
	document.getElementById("txtIdResultado").value = importeFinal;

}

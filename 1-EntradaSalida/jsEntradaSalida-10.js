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
	
	importe = parseInt(document.getElementById("txtIdImporte").value);
	
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	
	importeFinal = importe - (importe * (descuento/100));
	
	document.getElementById("txtIdResultado").value = importeFinal;

}

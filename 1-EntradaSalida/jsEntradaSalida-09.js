/*
Bacchetta, Tomás
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Agregada la posibilidad de que el usuario determine el porcentaje de aumento
*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var sueldoFinal;
	
	sueldo = document.getElementById("txtIdSueldo").value;
	
	sueldo = parseInt(sueldo);

	aumento = prompt("Ingrese el porcentaje de aumento: ");
	
	aumento = parseInt(aumento);

	sueldoFinal = sueldo + (sueldo * (aumento / 100));
	
	document.getElementById("txtIdResultado").value =  sueldoFinal;

}

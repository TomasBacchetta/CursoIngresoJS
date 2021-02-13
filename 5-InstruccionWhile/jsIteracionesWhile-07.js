/*
Bacchetta, Tomás
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;
	let promedio;

	contador=0;
	acumulador=0;

	while (respuesta != 'Si'){
		
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el número #" + contador);

		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		
		console.log(acumulador);

		respuesta = prompt(">>>Desea finalizar con la carga? (Si/No)");
		
	}
	
	promedio = acumulador / contador;
	
	document.getElementById('txtIdSuma').value = "La suma de los " + contador + " números es: " + acumulador;
	
	document.getElementById('txtIdPromedio').value = "El promedio de los " + contador + " números es: " + promedio;

}
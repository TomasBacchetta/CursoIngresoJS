/*   
Bacchetta, Tomás
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.


*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;

	while (contador < 5){
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el número #" + contador);
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		
		console.log(acumulador);
	
	}
	
	promedio = acumulador / contador;
	
	document.getElementById('txtIdSuma').value = "La suma de los " + contador + " números es: " + acumulador;
	
	document.getElementById('txtIdPromedio').value = "El promedio de los " + contador + " números es: " + promedio;

}
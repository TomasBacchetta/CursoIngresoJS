/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.

txtIdIntentos

*/
let numeroSecreto; 
let contadorIntentos;

contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100 ) + 1;
  numeroSecreto = parseInt(numeroSecreto);

}

function verificar()
{
	let numeroIngresado;

  numeroIngresado = document.getElementById('txtIdNumero').value;
  numeroIngresado = parseInt(numeroIngresado);
  

  while (((isNaN(numeroIngresado) == true) || numeroIngresado < 1 || numeroIngresado >100) ){ 
    numeroIngresado = prompt("Tiene que ingresar un número, y que sea entre 1 y 100!");
    numeroIngresado = parseInt(numeroIngresado);
    document.getElementById('txtIdNumero').value = numeroIngresado;
    
  }
  
  
  if (numeroIngresado == numeroSecreto){
    alert("Usted acertó en " + contadorIntentos + " intentos!!");
    contadorIntentos = 0;
  
  } else {
    if (numeroIngresado > numeroSecreto){
      alert("Se pasó.");
      contadorIntentos = contadorIntentos + 1;
    
    } else {
      alert("Le falta.");
      contadorIntentos = contadorIntentos + 1;

    }

  }  

  document.getElementById('txtIdIntentos').value = contadorIntentos;;

}
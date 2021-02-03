/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numero1;
	let numero2;	
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2;

	alert(`El resultado de la suma es: ${resultado}`);

	document.getElementById("txtIdNumeroUno") = "";
	document.getElementById("txtIdNumeroDos") = "";


}

function restar()
{
	let numero1;
	let numero2;	
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2;

	alert(`El resultado de la resta es: ${resultado}`);

	document.getElementById("txtIdNumeroUno") = "";
	document.getElementById("txtIdNumeroDos") = "";
}

function multiplicar()
{ 
	let numero1;
	let numero2;	
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert(`El resultado de la multiplicación es: ${resultado}`);

	document.getElementById("txtIdNumeroUno") = "";
	document.getElementById("txtIdNumeroDos") = "";
}

function dividir()
{
	let numero1;
	let numero2;	
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	alert(`El resultado de la división es: ${resultado}`);

	document.getElementById("txtIdNumeroUno") = "";
	document.getElementById("txtIdNumeroDos") = "";
}


/*
Bacchetta, Tomás
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.
 
*/ 

function mostrar()
{
	var sexoIngresado;
	var sexo;
	
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != 'm' && sexoIngresado != 'f'){
		sexoIngresado = prompt("Dato erróneo. Ingrese f ó m");	
	
	}

	switch (sexoIngresado){
		case 'm':
			sexo = 'Masculino';
			break;

		case 'f':
			sexo = 'Femenino';
			break;

	}

	document.getElementById('txtIdSexo').value = sexo;
}
/*
Bacchetta, Tomás
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/

function ComenzarIngreso () 
{
 	let edadIngresada;
 	let sexoIngresado;
	let sexo;
 	let estadoCivilIngresado;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let textoLegajo;
	let nacionalidadIngresada;
	let nacionalidad;
	let largoLegajo;
	let contador;

	contador = 0;

	edadIngresada = prompt ("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);
	
	while (isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90){
		edadIngresada = prompt("Error! Debe tener entre 18 y 90 años para iniciar el trámite. Ingrese la edad nuevamente");
		edadIngresada = parseInt(edadIngresada);

	}

	sexoIngresado = prompt("Ingrese su sexo. (M/F)");

	while (sexoIngresado != "M" && sexoIngresado != "F"){
		sexoIngresado = prompt("Dato inválido. Ingrese su sexo (M/F)");

	}

	estadoCivilIngresado = prompt("Ingrese su estado civil: \n1-Soltero \n2-Casado \n3-Divorciado \n4-Viudo");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while (isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4){
		estadoCivilIngresado = prompt("Error! Ingrese su estado civil: \n1-Soltero \n2-Casados \n3-Divorciados \n4-Viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	
	}

	sueldoBruto = prompt("Ingrese su sueldo bruto, en números");
	sueldoBruto = parseInt(sueldoBruto);

	while (isNaN(sueldoBruto) == true || sueldoBruto < 8000){
		sueldoBruto = prompt("Dato inválido. El sueldo debe ser mayor o igual a $8000 y debe ser escrito numéricamente");

	}
	
	numeroLegajo =  prompt("Ingrese su número de legajo. Recuerde que debe tener cuatro cifras y ningún cero a la izquierda");
	
	textoLegajo = numeroLegajo; //esto es porque necesito conservar el contenido del string del legajo
	
	numeroLegajo = parseInt(numeroLegajo);
	
	largoLegajo = textoLegajo.length;
	
	while (isNaN(numeroLegajo) == true || largoLegajo != 4 || textoLegajo[0] == 0){
		numeroLegajo =  prompt("Error! Recuerde que debe tener cuatro cifras y ningún cero a la izquierda");
	
		textoLegajo = numeroLegajo; //esto es porque necesito conservar el contenido del string del legajo
	
		numeroLegajo = parseInt(numeroLegajo);
	
		largoLegajo = textoLegajo.length
	
	}

	nacionalidadIngresada = prompt("Ingrese su nacionalidad: \nA- Argentino \nE- Extranjero \nN- Nacionalizado");

	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N"){
		nacionalidadIngresada = prompt("Error! Ingrese su nacionalidad nuevamente: \nA- Argentino \nE- Extranjero \nN- Nacionalizado");

	}

	switch (sexoIngresado){
		case 'M':
			sexo = "Masculino";
			break;

		case 'F':
			sexo = "Femenino";
			break;	
	
	}

	switch (estadoCivilIngresado){
		case 1:
			estadoCivil = "Soltero";
			break;
		
		case 2:
			estadoCivil = "Casado";
			break;

		case 3:
			estadoCivil = "Divorciado";
			break;

		case 4:
			estadoCivil = "Viudo";
			break;
	
	}

	switch (nacionalidadIngresada){
		case 'A':
			nacionalidad = "Argentino";
			break;

		case 'E':
			nacionalidad = "Extranjero";
			break;

		case 'N':
			nacionalidad = "Nacionalizado";
			break;

	}
	
	document.getElementById('txtIdEdad').value = edadIngresada;

	document.getElementById('txtIdSexo').value = sexo;

	document.getElementById('txtIdEstadoCivil').value = estadoCivil;

	document.getElementById('txtIdSueldo').value = sueldoBruto;
	
	document.getElementById('txtIdLegajo').value = numeroLegajo;

	document.getElementById('txtIdNacionalidad').value = nacionalidad;
	

}

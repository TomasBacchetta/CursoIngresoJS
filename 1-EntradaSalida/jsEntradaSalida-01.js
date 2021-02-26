/*
Bacchetta, Tomás
A-ingrese nombre , sexo ,
 edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), 
 altura (validar), temperatura corporal

 B-necesitamos saber: el nombre y el sexo de la persona mas alta , 
 --de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito ,

C-Informar :
 el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, 
 la cantidad de personas que miden mas de 1,60 metros, 
 y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts


*/
function mostrar() {
	
	let nombre;
	let sexo;
	let edad;
	let altura;
	let temperaturaCorporal;
	let contador;
	let respuesta;
	let mayorAltura;
	let nombreMayorAltura;
	let sexoMayorAltura;
	let edadMujerMasJoven;
	let nombreMujerMasJoven;
	let alturaHombreMasBajo;
	let nombreHombreMasBajo;
	let sexoEntero;
	let acumuladorEdadHombres;
	let acumuladorEdadMujeres;
	let contadorHombres;
	let contadorMujeres;
	let personasDeMasUnoSesenta;
	let promedioEdadHombres;
	let promedioEdadMujeres;
	let porcentajeMujeresSobreTotal;

	contadorHombres = 0;
	contadorMujeres = 0;
	acumuladorEdadHombres = 0;
	acumuladorEdadMujeres = 0;
	personasDeMasUnoSesenta = 0;

	respuesta = "si";

	for (contador = 1; respuesta == "si"; contador++){
		nombre = prompt("Ingrese el nombre de la persona #" + contador + ":");
		
		while (isNaN(nombre) == false){
			nombre = prompt("Incorrecto! Ingrese el nombre de la persona #" + contador + ":");
		
		}
		
		sexo = prompt ("Ingrese el sexo de la persona #" + contador + " (f/m):");
		
		while (sexo != "f" && sexo != "m"){
			sexo = prompt ("Ingrese el sexo de la persona #" + contador + " (f/m):");
		
		}

		altura = prompt("Ingrese la altura de la persona #" + contador + ":");
		altura = parseFloat(altura);

		while (isNaN(altura) == true || altura < 1 || altura > 3){
			altura = prompt("Altura incorrecta! Ingrese la altura de la persona #" + contador + ":");
			altura = parseFloat(altura);
		
		}
		

		edad = prompt ("Ingrese la edad de la persona #" + contador + ":");
		edad = parseInt(edad);

		switch (sexo){
			case "f":
				contadorMujeres = contadorMujeres + 1;
				while (isNaN(edad) == true || edad < 13 || edad > 18){ 
					edad = prompt ("Incorrecto! Recuerde que la persona #" + contador + " de ser mujer debe ser adolescente! (entre 13 y 18 años):");
					edad = parseInt(edad);
					
					}
				
				if (contadorMujeres == 1 || edad < edadMujerMasJoven){
						
					edadMujerMasJoven = edad;
						
					nombreMujerMasJoven = nombre;
	
				}
				
				acumuladorEdadMujeres = acumuladorEdadMujeres + edad;

				break;

			default:
				contadorHombres = contadorHombres + 1;
				while (isNaN(edad) == true || edad < 3 || edad > 12){ 
					edad = prompt ("Incorrecto! Recuerde que la persona #" + contador + " de ser hombre debe ser niño! (entre 3 y 12 años):");
					edad = parseInt(edad);

					}
				
				if (contadorHombres == 1 || altura < alturaHombreMasBajo){
					alturaHombreMasBajo = altura;
						
					nombreHombreMasBajo = nombre;

				}
				
				acumuladorEdadHombres = acumuladorEdadHombres + edad;

				break;

		}
		
		temperaturaCorporal = prompt("Ingrese la temperatura corporal de la persona #" + contador + " (entre 36 a 40):");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while (isNaN(temperaturaCorporal) == true || temperaturaCorporal < 36 || temperaturaCorporal > 40){
			temperaturaCorporal = prompt("Incorrecto! Ingrese la temperatura corporal de la persona #" + contador + ":");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		
		}


		if (contador == 1 || altura > mayorAltura){
			mayorAltura = altura;
			nombreMayorAltura = nombre;
			sexoMayorAltura = sexo;
			
		}

		if (altura > 1.6){
			personasDeMasUnoSesenta = personasDeMasUnoSesenta + 1;

		}

		respuesta = prompt("Desea ingresar una persona nueva? (si/no)");

		while (respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Debe poner si o no! Desea ingresar una persona nueva? (si/no)");
		
		}
	
	}

	switch(sexoMayorAltura){
		case "f":
			sexoEntero = "femenino";
			break;

		default:
			sexoEntero = "masculino";
			break;

	}

	promedioEdadHombres = acumuladorEdadHombres / contadorHombres;
	console.log (contadorHombres);
	
	promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;

	porcentajeMujeresSobreTotal = contadorMujeres * 100 / personasDeMasUnoSesenta;
	
	document.write(
		nombreMayorAltura + ", de sexo " + sexoEntero + ", es la persona con mayor altura.<br>" +
		"La mujer más joven es " + nombreMujerMasJoven + "<br>" +
		"El hombre más bajo es " + nombreHombreMasBajo + "<br>" +
		"El promedio de edad entre los hombres es de " + promedioEdadHombres + "<br>" +
		"El promedio de edad entre las mujeres es de " + promedioEdadMujeres + "<br>" +
		"La cantidad de personas que miden mas de 1,60 metros es de " + personasDeMasUnoSesenta + "<br>" + 
		"El porcentaje de mujeres sobre el total de personas de mas de 1,60 metros es de " + porcentajeMujeresSobreTotal + "%"

	);
	
}



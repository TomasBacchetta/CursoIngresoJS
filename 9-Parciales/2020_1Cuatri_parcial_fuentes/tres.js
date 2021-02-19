/*
Bacchetta, Tomás

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
Curso de ingreso UTN FRA

*/

function mostrar()
{
	let contador;
	let respuesta;
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let contadorMayorDeEdadViudo;
	let viejoFiebre;
	let contadorHombreViudo;
	let contadorHombreSoltero;
	let sumatoriaEdadHombreSolteros;
	let promedioHombresSolteros;
	


	contador = 0;

	contadorMayorDeEdadViudo = 0;

	contadorViejoFiebre = 0;

	contadorHombreSoltero = 0;

	contadorHombreViudo = 0;
	
	respuesta = "si";

	while (respuesta == "si"){
		contador = contador + 1;
		
		nombre = prompt("Ingrese el nombre del pasajero #" + contador + ":");

		while (isNaN(nombre) == false){
			nombre = ("Incorrecto! Ingrese el nombre del pasajero #" + contador + ":");
		
		}

		edad = prompt("Ingrese la edad del pasajero #" + contador + ":");
		edad = parseInt(edad);

		while (isNaN(edad) == true || edad < 18 || edad > 99){
			edad = prompt("Incorrecto! Ingrese la edad del pasajero #" + contador + " (entre 18 y 99 años):");
			edad = parseInt(edad);

		}

		sexo = prompt("Ingrese el sexo del pasajero #" + contador + " (f/m):");

		while (sexo != "f" && sexo != "m"){
			sexo = prompt("Incorrecto! Ingrese el sexo del pasajero #" + contador + " (f/m):");
		
		}

		estadoCivil = prompt("Ingrese el estado civil del pasajero #" + contador + " (soltero/casado/viudo):");

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
			estadoCivil = prompt("Incorrecto! Ingrese el estado civil del pasajero #" + contador + " (soltero/casado/viudo):");

		}

		temperaturaCorporal = prompt("Ingrese la temperatura corporal del pasajero #" + contador + " (rango: 36 a 40)");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while (temperaturaCorporal < 36 || temperaturaCorporal > 40){
			temperaturaCorporal = prompt("Incorrecto! Ingrese la temperatura corporal del pasajero #" + contador + " (rango: 36 a 40)");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		
		}
		
		respuesta = prompt("Desea continuar? (si/no):");
		
		while (respuesta != "si" && respuesta != "no"){
			respuesta = prompt("Tiene que poner 'si' o 'no'!");

		}

		if (contador == 1){
			mayorTemperatura = temperaturaCorporal;
			nombreMayorTemperatura = nombre;

		} else {
			if (temperaturaCorporal > mayorTemperatura){
				mayorTemperatura = temperaturaCorporal;
				nombreMayorTemperatura = nombre;
			
			}
		
		}
		//seguir aca
	}

	document.write(
		"La persona con mayor temperatura es " + nombreMayorTemperatura + "<br>" 



	
	
	
	);
	

}

/*
Bacchetta, Tomás
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"

FUNCIONA CON E/S EJERCICIO 1
IGNORA EDADES IGUALES

*/
function mostrar()
{
	
	let nombre;
	let edad;
	let nombreDelMayor;
	let edadDelMayor;
	let nombreDelMenor;
	let edadDelMenor;
	let banderaMayor;
	let continuar;

	banderaMayor = 0;

	continuar = "s";

	while (continuar == "s"){

		nombre = prompt("Ingrese su nombre:");
	
		while (isNaN(nombre) == false){
			nombre = prompt("No ingrese numeros! Solo su nombre:");

		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);

		while (isNaN(edad) == true || edad < 0){
			edad = prompt("Ingrese numeros positivos!");
			edad = parseInt(edad);

		}

		if (banderaMayor == 0){
			nombreDelMayor = nombre;
	
			edadDelMayor = edad;

			nombreDelMenor = nombre;

			edadDelMenor = edad;
		
			banderaMayor = 1;
		
		} else {
			if (edad > edadDelMayor){
				edadDelMayor = edad;
				nombreDelMayor = nombre;
		
			} else {
				if (edad < edadDelMenor){
					edadDelMenor = edad;
					nombreDelMenor = nombre;
				}
	
			}
		
		}
	

	

		continuar = prompt ("Desea continuar? (s/n)");

		while (continuar != "s" && continuar != "n" ){
			continuar = prompt ("Escriba 's' o 'n'!");

		}

	}

	alert("El mayor es " + nombreDelMayor + ", con " + edadDelMayor + " años.");
	
	alert("El menor es " + nombreDelMenor + ", con " + edadDelMenor + " años.");
	
}



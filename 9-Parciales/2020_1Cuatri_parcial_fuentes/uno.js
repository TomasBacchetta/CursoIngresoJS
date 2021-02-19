/*
Bacchetta, Tomás

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/

function mostrar()
{
	let contador;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let tipoProducto;
	let precio;
	let cantUnidades;
	let marca;
	let fabricante;
	let cantBarbijo;
	let cantJabon;
	let cantAlcohol;
	let masBaratoAlcohol;
	let unidadesMasBaratoAlcohol;
	let fabricanteAlcoholMasBarato;
	let tipoConMasUnidades;
	let cantComprasParaPromedio;
	let promedio;

	contador = 0;
	
	contadorBarbijo = 0;
	
	contadorJabon = 0;
	
	contadorAlcohol = 0;

	
	cantBarbijo = 0;
	
	cantJabon = 0;
	
	cantAlcohol = 0;

	while (contador < 5){
		contador = contador + 1;

		tipoProducto = prompt("Ingrese el tipo de producto #" + contador + " (barbijo/jabon/alcohol)");

		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol"){
			tipoProducto = prompt("Incorrecto! Ingrese el tipo de producto #" + contador + " (barbijo/jabon/alcohol)");
		
		}
		
		precio = prompt("Ingrese el precio del producto #" + contador + " (entre 100 y 300");
		precio = parseInt(precio);

		while (isNaN(precio) == true || (precio < 100 && precio > 300)){
			precio = prompt("Incorrecto! Ingrese el precio del producto #" + contador + " (entre 100 y 300");
			precio = parseInt(precio);

		}

		cantUnidades = prompt("Ingrese la cantidad de unidades del producto #" + contador + " (no más de 1000)");
		cantUnidades = parseInt(cantUnidades);

		while (isNaN(cantUnidades) == true || cantUnidades < 1 || cantUnidades > 1000){
			cantUnidades = prompt("Incorrecto! Ingrese la cantidad de unidades del producto #" + contador + " (no más de 1000)");
			cantUnidades = parseInt(cantUnidades);

		} 
		
		marca = prompt("Ingrese la marca del producto #" + contador);

		while (isNaN(marca) == false){
			marca = prompt("Incorrecto! Ingrese la marca del producto #" + contador);
		
		}

		fabricante = prompt("Ingrese el fabricante del producto #" + contador);

		while (isNaN(fabricante) == false){
			fabricante = prompt("Incorrecto! Ingrese el fabricante del producto #" + contador);

		}
		
		switch (tipoProducto){
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				cantBarbijo = cantBarbijo + cantUnidades;
				break;

			case "jabon":
				contadorJabon = contadorJabon + 1;
				cantJabon = cantJabon + cantUnidades;
				break;

			case "alcohol":
				contadorAlcohol = contadorAlcohol + 1;
				cantAlcohol = cantAlcohol + cantUnidades;
				
				if (contadorAlcohol == 1){
					masBaratoAlcohol = precio;
					unidadesMasBaratoAlcohol = cantUnidades;
					fabricanteAlcoholMasBarato = fabricante;
				
				} else {
					if (precio < masBaratoAlcohol){
						masBaratoAlcohol = precio;
						unidadesMasBaratoAlcohol = cantUnidades;
						fabricanteAlcoholMasBarato = fabricante;
					}
				}
				break;
		}

		

	}

	if (cantAlcohol > cantJabon && cantAlcohol > cantBarbijo){
		tipoConMasUnidades = cantAlcohol;
		cantComprasParaPromedio = contadorAlcohol;

	} else {
		if (cantJabon > cantBarbijo){
			tipoConMasUnidades = cantJabon;
			cantComprasParaPromedio = contadorJabon;
		
		} else {
			tipoConMasUnidades = cantBarbijo;
			cantComprasParaPromedio = contadorBarbijo
		
		}
	}

	promedio = tipoConMasUnidades / cantComprasParaPromedio;
	

	document.write("La cantidad del más barato de los alcoholes es de: " + unidadesMasBaratoAlcohol +  
	", y su fabricante es: " + fabricanteAlcoholMasBarato + "<br>" +
	"Del tipo con más unidades, el promedio por compra es de: " + promedio + "<br>" +
	"Hay " + cantJabon + " unidades de jabon"

	
	
	);

}
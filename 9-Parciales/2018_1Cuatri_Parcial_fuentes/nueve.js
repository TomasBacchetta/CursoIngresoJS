/*
Bacchetta, Tomás
Punto 9 del parcial 2018

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

*/

function mostrar()
{
    let contadorProductos;
    let marca;
    let peso;
    let temperatura;
    let mayorPeso;
    let menorPeso;
    let marcaPesado;
    let cantidadTempPares;
    let cantidadConserva;
    let acumuladorPesos;
    let promedioPesos;
    let respuesta;
    
    contadorProductos = 0;

    cantidadTempPares = 0;
    
    cantidadConserva = 0;
    
    acumuladorPesos = 0;
    
    respuesta = "s";

    while (respuesta == "s"){
        contadorProductos = contadorProductos + 1;
        
        marca = prompt("Ingrese la marca del producto #" + contadorProductos + ":");

        while (isNaN(marca) == false){
            marca = prompt("Ingrese el nombre de la marca #" + contadorProductos + " sin números!!");
            
        }

        peso = prompt("Ingrese el peso del producto #" + contadorProductos + " (entre 1 y 100):");
        peso = parseInt(peso);

        while (isNaN(peso) == true || peso < 1 || peso > 100){
            peso = prompt("Peso Incorrecto!");
            peso = parseInt(peso);
            
        }

        temperatura = prompt("Ingrese la temperatura de almacenamiento del producto #" + contadorProductos + " (entre -30 y 30 grados)");
        temperatura = parseInt(temperatura);

        while (isNaN(temperatura) == true || temperatura < -30 || temperatura > 30){
            temperatura = prompt("Peso Incorrecto!");
            temperatura = parseInt(temperatura);
        }

        if (temperatura % 2 == 0){
            cantidadTempPares = cantidadTempPares + 1;

        }

        if (temperatura < 0){
            cantidadConserva = cantidadConserva + 1;
        
        }

        switch (contadorProductos){
            case 1:
                mayorPeso= peso;
            
                menorPeso = peso;
            
                marcaPesado = marca;
            
                break;

            default:
                if (peso > mayorPeso){
                    mayorPeso = peso;
                        
                    marcaPesado = marca;
        
                } else {
                    if (peso < menorPeso){
                        menorPeso = peso;
        
                    } else {
                        if (marca != marcaPesado){
                            marcaPesado = marcaPesado + ", " + marca; //para múltiples marcas del mismo peso
                        
                        }
                        
                    }
        
                }
                
                break;

        }
            
        acumuladorPesos = acumuladorPesos + peso;

        respuesta = prompt("Desea continuar? (s/n)?");

        while(respuesta != "s" && respuesta != "n"){
            respuesta = prompt("Ingrese 's' o 'n'!!");

        }
    
    }
    
    promedioPesos = acumuladorPesos / contadorProductos;

    document.write(
		"La cantidad de temperaturas pares: " + cantidadTempPares + "<br>" +
		"La/s marca/s del modelo más pesado es: " + marcaPesado + "<br>" + 
		"La cantidad de productos que se conservan a menos de 0 grados: " + cantidadConserva + "<br>" +
		"El promedio del peso de todos los productos es: " + promedioPesos + "<br>" +
        "El peso máximo registrado es " + mayorPeso + ", y el menor es " + menorPeso
    
    );

}

/*
Bacchetta, Tomás

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/



function mostrar()
{
  let contador;
  let respuesta;
  let tipoProducto;
  let cantBolsas;
  let cantBolsasArena;
  let cantBolsasCal;
  let cantBolsasCemento;
  let cantBolsasTotales;
  let precioBolsa;
  let descuento;
  let importeParcial;
  let importeTotal;
  let importeTotalConDescuento;
  let tipoConMasBolsas;
  let precioMasCaro;
  let tipoMasCaro;

  contador = 0;

  respuesta = "si";

  cantBolsasArena = 0;

  cantBolsasCal = 0;

  cantBolsasCemento = 0;

  importeTotal = 0;
  
  descuento = 0;



  while (respuesta == "si"){
    contador = contador + 1;

    tipoProducto = prompt("Ingrese el tipo de producto #" + contador + " (arena/cal/cemento) ");

    while (tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento"){
      tipoProducto = prompt("Incorrecto!. Ingrese el tipo de producto #" + contador + " (arena/cal/cemento) ");
    
    }

    cantBolsas = prompt("Ingrese la cantidad de bolsas de producto #" + contador );
    cantBolsas = parseInt(cantBolsas);

    while (isNaN(cantBolsas) == true || cantBolsas < 1){
      cantBolsas = prompt("Incorrecto! Ingrese la cantidad de bolsas de producto #" + contador );
      cantBolsas = parseInt(cantBolsas);
    }

    precioBolsa = prompt("Ingrese el precio por bolsa de producto #" + contador);
    precioBolsa = parseInt(precioBolsa);

    while(isNaN(precioBolsa) == true || precioBolsa < 1){
      precioBolsa = prompt("Incorrecto! Ingrese el precio por bolsa de producto #" + contador);
      precioBolsa = parseInt(precioBolsa);

    }

    
    if (contador == 1){
      precioMasCaro = precioBolsa;
      tipoMasCaro = tipoProducto; 
    
    } else {
      if (precioBolsa > precioMasCaro){ 
        precioMasCaro = precioBolsa;
        tipoMasCaro = tipoProducto;
      
      }
    
    }

    switch (tipoProducto){
      case "arena":
        cantBolsasArena = cantBolsasArena + cantBolsas;
        
        break;

        case "cal":
          cantBolsasCal = cantBolsasCal + cantBolsas;  
        
          break;

        case "cemento":
          cantBolsasCemento = cantBolsasCemento + cantBolsas;
          
          break;

    }
  
    importeParcial = cantBolsas * precioBolsa;

    importeTotal = importeTotal + importeParcial;

    respuesta = prompt("Desea continuar? (si/no");

    while (respuesta != "si" && respuesta != "no"){
      respuesta = prompt("Tiene que poner que si o no!");
    
    }
 
  }  

  cantBolsasTotales = cantBolsasArena + cantBolsasCal + cantBolsasCemento;

  if (cantBolsasTotales > 30){
    descuento = 25;
  
  } else {
    if (cantBolsasTotales > 10){
      descuento = 15
    
    }
  
  }

  descuento = parseInt(descuento);
  importeTotalConDescuento = importeTotal - (importeTotal * descuento / 100);

  if (cantBolsasArena > cantBolsasCal && cantBolsasArena > cantBolsasCemento){
    tipoConMasBolsas = "arena";

  } else {
    if (cantBolsasCal > cantBolsasCemento){
      tipoConMasBolsas = "cal";

    } else {
      tipoConMasBolsas = "cemento";

    }

  }

  document.write(
    "El importe total a pagar, bruto y sin descuento, es de: " + importeTotal + " pesos<br>" + 
    "El importe final con descuento, si es que hay, es de: " + importeTotalConDescuento + "pesos<br>" +
    "El tipo con más cantidad de bolsas es " + tipoConMasBolsas + "<br>"+
    "El tipo más caro es " + tipoMasCaro 


  
  
  );

}

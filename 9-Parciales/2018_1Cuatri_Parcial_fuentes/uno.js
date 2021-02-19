/*
Bacchetta, Tomás

Parcial 2018 ejercicio 1

Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.

*/

function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = prompt ("Ingrese el ancho del rectángulo en metros");
    ancho = parseInt(ancho);

    while (isNaN(ancho) == true || ancho < 1){
        ancho = prompt ("Ingrese el ancho correctamente!");
        ancho = parseInt(ancho);

    }

    largo = prompt("Ingrese el largo del rectángulo en metros");
    largo = parseInt(largo);

    while (isNaN(largo) == true || largo < 1){
        largo = prompt ("Ingrese el largo correctamente!");
        largo = parseInt(largo);

    }

    perimetro = 2 * (ancho + largo);

    alert("El perímetro es: " + perimetro + " metros.");

}

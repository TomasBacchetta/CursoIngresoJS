/*
Bacchetta, Tomás

Parcial 2018 ejercicio 2

Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".

*/

function mostrar()
{
    let nombre;
    let localidad;

    nombre = document.getElementById('elNombre').value;
    
    while (isNaN(nombre) == false){
       nombre = prompt("Nombre incorrecto! Escribalo aquí");
       document.getElementById('elNombre').value = nombre;

    }

    localidad = document.getElementById('laLocalidad').value;

    while (isNaN(localidad) == false){
        localidad = prompt("Localidad incorrecta! Escríbala aquí")
        document.getElementById('laLocalidad').value = localidad;

   }

    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);

}

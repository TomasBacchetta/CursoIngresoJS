/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre; 
    
    largo = document.getElementById('txtIdLargo').value;
    largo = parseInt(largo);
    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseInt(ancho);
    perimetro = (largo + ancho) * 2;
    cantidadAlambre = perimetro * 3;
    alert("Necesitará " + cantidadAlambre + " metros de alambre para su terreno rectangular");

}

function Circulo () 
{
    const PI = 3.1415;
    var radio;
    var cantidadAlambre;
    
    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);
    cantidadAlambre = (2 * PI * radio) * 3;
    alert("Necesitará " + cantidadAlambre + " metros de alambre para su terreno circular");

}

function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cantidadCemento;
    var cantidadCal;
    
    largo = document.getElementById('txtIdLargo').value;
    largo = parseInt(largo);
    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseInt(ancho);
    area = largo * ancho;
    cantidadCemento = area * 2;
    cantidadCal = area * 3;

    alert("Necesitará " + cantidadCemento + " bolsas de cemento, y " + cantidadCal + " bolsas de cal para su terreno rectangular");

}
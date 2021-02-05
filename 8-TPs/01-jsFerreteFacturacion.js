/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);
    resultadoSuma = precioUno + precioDos + precioTres;

    alert("La suma de todos los precios es de: " + resultadoSuma + " pesos");
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultadoPromedio;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);
    resultadoPromedio = (precioUno + precioDos + precioTres)/3;

    alert("El promedio de todos los precios es de: " + resultadoPromedio + " pesos");
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultadoFinal;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);
    resultadoFinal = (precioUno + precioDos + precioTres) * 1.21;

    alert("La suma de todos los precios es de: " + resultadoFinal + " pesos");

}
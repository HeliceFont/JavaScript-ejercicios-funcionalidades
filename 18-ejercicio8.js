'use strict'
/*
calculadora 
- Pida dos números por pantalla
- Si metemos uno mal que nos lo vuelva a pedir 
- Nos muestre en el cuerpo de la página, en una alerta y por la consola el resultado 
de sumar, restar, multiplicar y dividir esas dos cifras
 */

var numero1 = parseInt(prompt('introduce el número1', 0));
var numero2 = parseInt(prompt('introduce el número2', 0));

while( numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('introduce el número1',0));
    numero2 = parseInt(prompt('introduce el número2',0));
}
var resultado = "<h1>Los número elegidos son:"+(numero1)+" y "+(numero2)+"</h1>"+" <br/>"+
                "La suma es: "+(numero1+numero2) +" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multiplicación es: "+(numero1*numero2)+" <br/>"+
                "La división es: "+(numero1/numero2)+" <br/>";

document.write(resultado);
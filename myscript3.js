// Tipo de datos en JS

document.getElementById("demo3").innerHTML = 
typeof 0 + "<br>" +                 //typeof dice que tipo de dato es
typeof 234 + "<br>" +
typeof 6.8956 + "<br>" +
typeof 120e7 + "<br>" +             //exponencial
typeof "Esteban" + "<br>" + 
typeof NaN + "<br>" +               //NaN no es un número
typeof Math.sqrt(-1) + "<br>" +              
typeof true + "<br>" +
typeof [2, 4, 5, 6] + "<br>" +
typeof {name: "Luisa", ciudad: "Medellín"} + "<br>" +
typeof undefined + "<br>" +
typeof null + "<br>" +
typeof function comer(){} + "<br>" +
(null === undefined) + "<br>" +
(null == undefined) + "<br>" + "<br>" + "<br>" ;

var miVariable;
var otraVariable = null;
//concatenacion
persona ="esteban ";
saludo = "saludo";
frasecompleta = persona + saludo;

document.getElementById("demo2.0").innerHTML = persona;
document.getElementById("demo2.1").innerHTML = saludo;
document.getElementById("demo2.2").innerHTML = frasecompleta;

//Concatenación con engaño 524
numeroImpar = 5;
numeroPar = 24;
numeroSeguido =  "" + numeroImpar + numeroPar; // "" los convierte en cadena

document.getElementById("demo2.3").innerHTML = numeroSeguido;

//Concatenación con concat()

animal = "Perro ";
sonido = "Guauu ";
accion = "Correr"

animalHabla = animal.concat(sonido, true, 23, accion, " ", persona, " por tu vida"); // concat recibe todos los tipos de variables

//animalHabla = animal.concat(sonido, accion, )

document.getElementById("demo2.4").innerHTML = animalHabla;


//Concatenación ${}

forma = "con estos simbolos ${}";


conclusion = `La forma de concatenar más adecuada es la siguiente: ${forma}, porque puedo poner la frase y llamar variables`;     //siempre toca usar `` para esta forma de concatenar

document.getElementById("demo2.5").innerHTML = conclusion;


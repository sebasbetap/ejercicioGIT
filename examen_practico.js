// Examen práctico de Juan Sebastian Betancur Posada para el curso Fundamentos de Desarrollo Javascript y POO

// 1. Colocar las condiciones necesarias para que se cumpla la salida en consola

console.warn('------------------------------------  Ejercicio 1 ----------------------------------------');

var numero1 = 5;
var numero2 = 8;

if (numero2 > numero1) {
    console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
    console.log("numero2 es positivo");
}
if (numero1 < 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if (numero1+1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// 2. El factorial de un número entero n es una operación matemática que consiste en
// multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
// (escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura crear un script que calcule la factorial de un número entero.

console.warn('------------------------------------  Ejercicio 2 ----------------------------------------');

const numberFactorial = 5; // Ingresar el número al que se le desea calcular su factorial

let result = 1;

if (numberFactorial > 0) {
    for (let i = numberFactorial; i > 0; i--) {
        if (i-1 != 0) {
            result = result*i;       
        }
    }
    console.log("El factorial de "+numberFactorial+" es: "+result);
} else {
    console.log("El número ingresado debe ser mayor a 0");
}

// 3. Escribir el código de una función a la que se pasa como parámetro un número entero
// y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función

console.warn('------------------------------------  Ejercicio 3 ----------------------------------------');

var chosenNumber = 8; // Ingresa el número que se desea verificar si es par o impar

isOdd (chosenNumber);

function isOdd(value) {
    if (value%2 == 0) {
        console.log("El número ingresado es Par");
    } else {
        console.log("El número ingresado es Impar");
    }    
}

// 4. Definir una función determine si la cadena de texto que se le pasa como parámetro
// es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
// derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”.

console.warn('------------------------------------  Ejercicio 4 ----------------------------------------');

var frase = "La ruta nos aporto otro paso natural"; // Ingresar frase que se desea calcular si es palíndromo o no

esPalindromo(frase);
console.log(esPalindromo(frase));

function esPalindromo(str) {
    const nuevaFrase = str.replace(/[\W_]/g, "").toLowerCase()
    const fraseReversed = nuevaFrase.split("").reverse().join("")
  
    return nuevaFrase === fraseReversed ? "La frase ingresada es un palindromo" : "La frase ingresada NO es un palindromo"
  }


// 5. Definir la siguiente jerarquía de objetos. 
// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.

console.warn('------------------------------------  Ejercicio 5 ----------------------------------------');

class Persona {
    nombre
    edad
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtDetalles(nombre, edad) {
        console.log(nombre);
        console.log(edad);
    }
}

class Estudiante extends Persona {
    calificacion;
    constructor (nombre, edad, calificacion) {
        super(nombre, edad);
        this.calificacion = calificacion;
    }

    obtDetalles(nombre, edad, calificacion) {
        console.log(nombre);
        console.log(edad);
        console.log(calificacion);
    }
}

class Profesor extends Persona {
    asignatura;
    nivel;

    constructor (nombre, edad) {
        super(nombre, edad);
        this.asignatura = "JS";
        this.nivel = "Básico";
    }

    obtDetalles(nombre, edad, asignatura, nivel) {
        console.log(nombre);
        console.log(edad);
        console.log(asignatura);
        console.log(nivel);
    }
}

class Grupo {
    profesor= Profesor;
    promedio
    estudiantes=[];

    constructor (profesor, estudiantes, promedio) {
        this.profesor = profesor;
        this.estudiantes = estudiantes;
        this.promedio = promedio;
    }

    addStudent(estudiante) {
        this.estudiantes.push(estudiante);
    }

    obtDetalles() {
        console.log(this.profesor);
        console.log(this.estudiantes);
    }

    calificar () {
        for (let i = 0; i < this.estudiantes.length; i++) {
            let estudiante = this.estudiantes[i];
            estudiante.calificacion = Math.random()*10;
        }
    }    

    promediar () {
        let promedio = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            promedio = promedio + this.estudiantes[i].calificacion;
        }
        let total = promedio/this.estudiantes.length;
        console.log('El promedio de calificación del grupo es: '+total);
    }
}

const juan = new Estudiante('Juan', 21);
const maria = new Estudiante('Maria', 19);
const camilo = new Estudiante('Camilo', 33);
const gerardo = new Estudiante('Gerardo', 45);
const alejandro = new Estudiante('Alejandro', 30);
const xiomara = new Estudiante('Xiomara', 28);

const ronald = new Profesor('Ronald', 37)

const programacion = new Grupo(ronald, Array(juan, maria, camilo, gerardo, alejandro, xiomara));
programacion.addStudent(juan, maria, camilo, gerardo, alejandro, xiomara);
programacion.calificar(programacion);
programacion.obtDetalles();
programacion.promediar();

// 6. Bonus: Escribe una function que genere todas las posibles combinaciones con las letras de
// dicho string. (La entrada la puede limitar a 3 letras)

console.warn('------------------------------------  Ejercicio Bonus ----------------------------------------');

function combinarString(str) {
    if (!Array.isArray(str)) {
        return str.split("").reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
    }
    return str.reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
}

console.log(combinarString("uno")); // Ingresar palabra o array
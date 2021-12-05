// Examen práctico de Juan Sebastian Betancur Posada para el curso Fundamentos de Desarrollo Javascript y POO

// 1. Colocar las condiciones necesarias para que se cumpla la salida en consola

console.warn('\n', '------------------------------------  Ejercicio 1 ----------------------------------------');

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

console.warn('\n', '------------------------------------  Ejercicio 2 ----------------------------------------');

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

console.warn('\n', '------------------------------------  Ejercicio 3 ----------------------------------------');

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

console.warn('\n', '------------------------------------  Ejercicio 4 ----------------------------------------');

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

console.warn('\n', '------------------------------------  Ejercicio 5 ----------------------------------------');

class Persona {
    nombre
    edad
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    obtDetalles(nombre, edad) {
        console.log('Se crea la Persona:', '\n', 'Nombre: '+nombre, ', Edad: '+edad+' años');
    }
}

class Estudiante extends Persona {
    calificacion;
    constructor (nombre, edad) {
        super(nombre, edad);
        this.calificacion = 'Estudiante sin Calificar aún';
    }

    obtDetalles(nombre, edad) {
        console.log('Se crea el Estudiante:', '\n', 'Nombre: '+nombre, ', Edad: '+edad+' años', ', Calificación: '+this.calificacion);
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

    obtDetalles(nombre, edad) {
        console.log('Se crea el Profesor:', '\n', 'Nombre: '+nombre, ', Edad: '+edad+' años', ', Asignatura: '+this.asignatura, ', Nivel: '+this.nivel);
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

    obtDetalles() {
        console.log('El Grupo está conformado por: ', '\n', this.profesor);
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
        console.log('\n', 'El promedio de calificación del grupo es: '+total);
    }
}

const sebastian = new Persona('Sebastian', 37);
sebastian.obtDetalles('Sebastian', 37); // Se prueba método en Clase Persona

const juan = new Estudiante('Juan', 21);
juan.obtDetalles('Juan', 21); // Se prueba método en Clase Estudiante

const maria = new Estudiante('Maria', 19);
const camilo = new Estudiante('Camilo', 33);
const gerardo = new Estudiante('Gerardo', 45);
const alejandro = new Estudiante('Alejandro', 30);
const xiomara = new Estudiante('Xiomara', 28);

const ronald = new Profesor('Ronald', 37); // Se crea Objeto tipo Profesor inicializado sólo con nombre y edad
ronald.obtDetalles('Ronald', 37); // Se prueba método en Clase Profesor

const estudiantes = new Array(juan, maria, camilo, gerardo, alejandro, xiomara) // Se crea el arreglo estudiantes

const programacion = new Grupo(ronald, estudiantes); // Se crea grupo al que se agrega array de estudiantes
programacion.calificar(programacion); // Se prueba método que itera y asigna calificación aleatoria
programacion.obtDetalles(); // Se prueba método que imprime los detalles del profesor y los detalles de todos los estudiantes
programacion.promediar(); // Se prueba método que arroja el promedio de todas las calificaciones de los estudiantes

// 6. Bonus: Escribe una function que genere todas las posibles combinaciones con las letras de
// dicho string. (La entrada la puede limitar a 3 letras)

console.warn('\n', '------------------------------------  Ejercicio Bonus ----------------------------------------');

function combinarString(str) {
    if (!Array.isArray(str)) {
        return str.split("").reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
    }
    return str.reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
}

console.log(combinarString("casa")); // Ingresar palabra o array
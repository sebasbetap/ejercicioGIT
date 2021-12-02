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

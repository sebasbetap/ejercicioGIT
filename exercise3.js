var chosenNumber = 8; // Ingresa el número que se desea verificar si es par o impar

isOdd (chosenNumber);

function isOdd(value) {
    if (value%2 == 0) {
        alert("El número ingresado es Par");
        console.log("El número ingresado es Par");
    } else {
        alert("El número ingresado es Impar");
        console.log("El número ingresado es Impar");
    }    
}
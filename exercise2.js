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




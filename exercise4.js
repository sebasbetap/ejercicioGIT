var frase = "La ruta nos aporto otro paso natural";

esPalindromo(frase);
console.log(esPalindromo(frase));

function esPalindromo(str) {
    const nuevaFrase = str.replace(/[\W_]/g, "").toLowerCase()
    const fraseReversed = nuevaFrase.split("").reverse().join("")
  
    return nuevaFrase === fraseReversed ? "La frase ingresada es un palindromo" : "La frase ingresada NO es un palindromo"
  }
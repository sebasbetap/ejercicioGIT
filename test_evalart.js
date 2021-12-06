var n = 5;

const tablero = new Array();

for (let i = 0; i < n; i++) {
    var column;
    tablero.splice(0, n + i);
    for (let j = 0; j < n; j++) {
        var row;
        if (i % 2 == j % 2) {
            row = 'X';            
        } else {
            row = '_';            
        }
        tablero.push(row);      
    }
    const tableroUnido = tablero.join("");
    console.log(tableroUnido);
}

var numbers = [1,3,4,2,7,0];

for (let i = 0; i < numbers.length; i ++) {
    for (let j = 0; j < numbers.length; j ++) {
        // evitamos la comparación de un elemento consigo mismo
        if (i != j && (numbers[i] + numbers[j]) == 10) {
            console.log(numbers[i], numbers[j]);
            return true;
        }
    }
}
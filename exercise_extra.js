function combinarString(str) {
    if (!Array.isArray(str)) {
        return str.split("").reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
    }
    return str.reduce((acum, value) => acum.concat(acum.map(data => [value].concat(data))), [[]]).join("")
}

console.log(combinarString("casa")); // Ingresar palabra o array
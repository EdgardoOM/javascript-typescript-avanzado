function calcularFactorial(numero) {
    if (numero === 0) {
        return 1
    } else {
        return numero * calcularFactorial(numero - 1)
    }
}

console.log(calcularFactorial(4))
console.log(calcularFactorial(5))

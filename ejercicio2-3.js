function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1
    } else if (exponente === 1) {
        return 1
    } else {
        return base * calcularPotencia(base, exponente - 1)
    }
}

console.log(calcularPotencia(2, 3))
console.log(calcularPotencia(2, 4))
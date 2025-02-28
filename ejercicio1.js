class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre
        this.sueldo = sueldo
    }
    mostrarInformacion() {
        return `El nombre del empleado es: ${this.nombre}, su sueldo es de $${this.sueldo} `
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo)
        this.departamento = departamento
    }
    mostrarInformacionCompleta() {
        console.log(this.mostrarInformacion() + `y es Gerente del departamento de ${this.departamento}`)
    }
}

const empleadoGerente = new Gerente('Edgardo', 2500000,'Comunicación')

empleadoGerente.mostrarInformacionCompleta()
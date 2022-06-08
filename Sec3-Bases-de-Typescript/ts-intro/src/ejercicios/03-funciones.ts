/*
    ===== Código de TypeScript =====
*/
function sumar (a: number, b: number): number {
    return a + b;
}

// const resultado = sumar(10, 20);
// console.log(resultado)//30

const sumarFlecha = (a: number, b: number):number => {
   return a + b
}

function multiplicar (a: number, b?: number, c: number = 2) {
    return a * c
}

// const resultadoMultiplicacion = multiplicar(10, 0, 10)
// console.log(resultadoMultiplicacion)//100

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarPV: () => void
}

function curar (personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Frodo",
    pv: 50,
    mostrarPV() {
        console.log("Puntos de vida: ", this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPV();


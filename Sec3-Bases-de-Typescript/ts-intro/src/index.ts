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
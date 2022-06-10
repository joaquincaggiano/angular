interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Joaquín",
}

const pasajero2: Pasajero = {
    nombre: "Lionel",
    hijos: ["Thiago", "Mateo", "Ciro"],
}

function imprimeHijos (pasajero: Pasajero):void {
    const cantidadHijos = pasajero.hijos?.length || 0;
    console.log(cantidadHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);




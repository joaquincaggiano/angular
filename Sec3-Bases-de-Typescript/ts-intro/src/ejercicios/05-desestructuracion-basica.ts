interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
}

interface Detalles {
    autor: string,
    anio: number
}

const reporductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015
    }
}

const autor = "Fulano";

const {volumen, segundo, cancion, detalles} = reporductor;
const {autor: autorDetalle} = detalles

// console.log(`El volumen actual es: ${volumen}`);
// console.log(`El segundo actual es: ${segundo}`);
// console.log(`La canción actual es: ${cancion}`);
// console.log(`El autor actual es: ${autorDetalle}`);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [goku, vegeta, trunks] = dbz

console.log(`Personaje 1: ${goku}`);
console.log(`Personaje 2: ${vegeta}`);
console.log(`Personaje 3: ${trunks}`);

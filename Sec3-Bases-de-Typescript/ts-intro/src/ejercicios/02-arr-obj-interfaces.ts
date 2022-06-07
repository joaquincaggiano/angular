/*
    ===== Código de TypeScript =====
*/
let habilidades: (boolean | string | number)[] = ["Bash", "Counter", 100]
habilidades.push(true);

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: "joaquin",
    hp: 24,
    habilidades: ["Bash", "Counter", "Healing"]
}

personaje.puebloNatal = "Pueblo Paleta";

console.table( personaje );
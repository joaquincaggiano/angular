class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

class Heroe extends PersonaNormal {
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal:string,
    ){
        super(nombreReal, "New York, USA");
    }

}

const ironMan = new Heroe("Iron Man", 40, "Tony");
console.log(ironMan)
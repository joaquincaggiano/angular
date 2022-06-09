import { calculaISV, Producto } from "./06-desest-argumentos";

const carritoCompras: Producto[] = [
    {
        desc: "Iphone 13",
        precio:1300
    },
    {
        desc: "Iphone 12",
        precio: 1000
    }
];

const [total, isv] = calculaISV(carritoCompras);
// console.log(`Total: ${total}`);
// console.log(`ISV: ${isv}`);

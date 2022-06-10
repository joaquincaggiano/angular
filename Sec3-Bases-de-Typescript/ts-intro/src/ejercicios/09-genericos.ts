function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy("Joaquin");
let soyNumber = queTipoSoy(24);
let soyArray = queTipoSoy([1,2,3]);
let soyExplícito = queTipoSoy<number>(100);
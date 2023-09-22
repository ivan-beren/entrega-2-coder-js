const lotes = [];

class Lote {
    constructor(numero, nbv) {
        this.numero = numero;
        this.nbv = nbv;
    }
}

function crearLote(numero, nbv) {
    let nuevoLote = new Lote(numero, nbv);
    lotes.push(nuevoLote);
}

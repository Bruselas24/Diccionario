const dispersion = require('./hash')

class Diccionario {

    constructor() {
        this.tabla = {}
    }

    añadirPalabra({ palabra }) {


        let posicion = dispersion(palabra.toLowerCase())

        if (this.tabla[posicion]) {
            this.tabla[posicion].push(palabra)
        } else {
            this.tabla[posicion] = []
            this.tabla[posicion].push(palabra)
        }

    }

    buscarPalabra({ palabra }) {

        let estado = false

        for (let i = 0; i < 20; i++) {
            if (this.tabla[i]) {
                this.tabla[i].forEach((element, index) => {
                    if (element == palabra) {
                        console.log(`La palabra se encuentra en la posicion numero ${i} en la posicion del vector ${index + 1}`)
                        estado = true
                    }
                })
            }
        }

        console.log('No se encontro la palabra :(')

    }

    mostrarTabla() {

        let estado = 0

        for (let i = 0; i < 20; i++) {
            if (this.tabla[i]) {
                console.log(`Posicion numero ${i}`)
                this.tabla[i].forEach(element => {
                    console.log(element)
                    estado++
                })
            }
        }

        if (estado == 0) console.log('No hay elementos en la tabla');

    }
}

module.exports = {
    Diccionario
}
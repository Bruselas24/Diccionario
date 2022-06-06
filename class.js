const dispersion = require('./hash')

//Creamos una clase que nos ayude a manejar la informacion
class Diccionario {

    //la clase diccionario tendra un objeto tabla que se iniciara vacio
    constructor() {
        this.tabla = {}
    }

    //Funcion que añade palabras a la tabla
    añadirPalabra({ palabra }) {

        //empezamos usando la funcion de dispersion("hash.js")
        //y pasamos la palabra a minusculas para tener siempre los mismo valores
        //independientemente de si la palabra contiene o no mayusculas/minusculas
        let posicion = dispersion(palabra.toLowerCase())

        //Si la posicion de la tabla contiene valores
        if (this.tabla[posicion]) {
            //añadimos al final la palabra
            this.tabla[posicion].push(palabra)
        } else {
            //en caso contrario declaramos un array en la posicion deseada
            this.tabla[posicion] = []
                //y ponemos la palabra
            this.tabla[posicion].push(palabra)
        }

    }

    //Funcion que busca la palabra
    buscarPalabra({ palabra }) {

        //variable auxiliar para mostrar un mensaje en caso de no haber elementos en la tabla
        let estado = false

        //recorremos cada posicion de la tabla
        for (let i = 0; i < 20; i++) {
            //si la posicion I contiene elementos
            if (this.tabla[i]) {
                //iteraremos cada elemento en busca de la palabra
                this.tabla[i].forEach((element, index) => {
                    //si el elemento es la palabra que buscamos mostraremos la posicion en la que se encuentra
                    if (element == palabra) {
                        console.log(`La palabra se encuentra en la posicion numero ${i} en la posicion del vector ${index + 1}`)
                            //establecemos estado en true dado que encontramos la palabra
                        estado = true
                    }
                })
            }
        }

        //si estado es false informaremos que no encontramos la palabra
        if (!estado) console.log('No se encontro la palabra :(')

    }

    //Funcion para mostrar la tabla
    mostrarTabla() {

        //variable auxiliar para mostrar un mensaje en caso de no haber elementos en la tabla
        let estado = 0

        //recorremos cada posicion de la tabla
        for (let i = 0; i < 20; i++) {
            //si la tabla tiene elementos
            if (this.tabla[i]) {
                //indicamos la posicion en la tabla
                console.log(`Posicion numero ${i}`)
                    //y mostraremos cada elemento que contenga
                this.tabla[i].forEach(element => {
                    console.log(element)
                        //sumamos a estado para el mensaje en caso de estar vacia
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
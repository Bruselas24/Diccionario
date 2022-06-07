//funcion que se encargara de dar el valor de la tabla
//donde se tiene que almacenar la palabra

let dispersion = (palabra) => {

    //declaramos el total de la suma de cada letra
    //dado A,a = 1 B,b = 2 ... Z,z = 29
    let suma = 0

    for (let i = 0; i < palabra.length; i++) {

        //de cada letra tomamos su codigo ASCII y luego le restamos 96
        //esto nos dara lo que buscamos
        //ej el codigo ASCII de la letra a es 97 por lo que
        //si le restamos 96 nos dara 1 y asi con todas las letras 
        suma += palabra.charCodeAt(i) - 96
    }


    //retornamos el resto de la suma entre 20 esta sera la posicion de la tabla
    return suma % 20
}

module.exports = dispersion